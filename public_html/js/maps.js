function initMap() {
	// Initialize Maps
	var allRoutes = loadJson('allRoutes.json');
	
	var maps = [];
	
	for (var r = 0; r < allRoutes.length; r++) { 
		var route = allRoutes[r];
		var mapId = 'map' + route['id'];
		maps.push(createMap(mapId, route));
	}
	// push at last for sameMarkerArray
	maps.push(createMap('map', allRoutes));
	
	// configure maps
	for (var entry of maps) {
		displayMarkers(entry.map, entry.routes);
		displayRoutes(entry.map, entry.routes);
		
		// Trigger map redraw when dom element is resized
		google.maps.event.addDomListener(window, 'resize', resizeTrigger(entry));

		// Preserve map perspective when after resize
		google.maps.event.addListener(entry.map, 'resize', resizeListener(entry));
	}
}
function resizeTrigger(entry) {
	google.maps.event.trigger(entry.map, 'resize');
}

function resizeListener(entry) {
	var center = entry.map.getCenter();
	google.maps.event.addListenerOnce(entry.map, 'center_changed', function() {
		entry.map.setCenter(center);
	});
}

function createMap(id, routes) {
	var mapOptions = {
		// The Temple Bar
		center : new google.maps.LatLng(53.34547, -6.26417),
		zoom: 13,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	
	var obj = {
		map: new google.maps.Map(document.getElementById(id), mapOptions),
		routes: routes
	};
	
	return obj;
}

function loadJson(file) {
	var data = null;
	
	$.ajax({ 
	    url: file,
	    dataType: 'json', 
	    async: false, 
	    success: function(json){
	        data = json;
	    } 
	});
	
	return data;
}

function displayMarkers(map, routes) {
	var shape = {
		coord: [1, 1, 1, 20, 18, 20, 18 , 1],
		type: 'poly'
	};
		
	if(routes instanceof Array) {
		for (var j = 0; j < routes.length; j++) {
			var route = routes[j];
			setMarkers(map, route, shape, false);
		}
	} else {
		setMarkers(map, routes, shape, true);
	}
	
	function setMarkers(map, route, shape, isSingleRoute) {
		var locations = route['points'];
		
		for (var i = 0; i < locations.length; i++) {
			var place = locations[i];

			var myLatLng = new google.maps.LatLng(place[1], place[2]);
			
			var id = place[3];
			var name = place[0];
			var color = place[4];
			var pinImage = new google.maps.MarkerImage("http://chart.googleapis.com/"
					+ "chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + color,
			        new google.maps.Size(21, 34),
			        new google.maps.Point(0,0),
			        new google.maps.Point(10, 34));
			
			var linkMarker = (color == "D3D3D3" && isSingleRoute);
			createMarker(map, myLatLng, pinImage, shape, name, id, linkMarker);
		}
	}
	
	function createMarker(map, myLatLng, pinImage, shape, name, id
			, linkSameMarkerForMultipleRoutes) {
		var marker = new google.maps.Marker({
			position: myLatLng,
			icon: pinImage,
			map: map,
			shape: shape,
			title: name,
			url: id
		});
		
		google.maps.event.addListener(marker, 'click', function() {
			if (linkSameMarkerForMultipleRoutes) {
				var mapDiv = $(this.url);
				
				// copied from template creative.min.js
				$("html, body").animate({
					scrollTop : mapDiv.offset().top - 70
				}, 1e3, "easeInOutExpo");
			} else {
				// nothing to do 
			}
		});
	}
}

/*
 * Let's make an array of requests 
 * which will become individual polylines on the map.
 */ 
function displayRoutes(map, routes){
	var requestArray = [];
	var renderArray = [];

	if(routes instanceof Array) {	
		for (var r = 0; r < routes.length; r++) {
			var route = routes[r];
			setRoutes(route, requestArray);
		}
	} else {
		setRoutes(routes, requestArray);
	}
	
	function setRoutes(route, requestArray) {
		var points = route.points;
		
		var origin;
		var destination;
		var waypoints = [];
		var lastPoint;
		for (var p = 0; p < points.length; p++) {
			if (points[p] === lastPoint) {
				// Duplicate of the last waypoint - don't bother
				continue;
			}
			// Prepare the lastpoint for the next loop
			lastPoint = points[p];
			
			// Add this to waypoint to the array for making the request
			var myLatLng = new google.maps.LatLng(lastPoint[1], lastPoint[2]);
			waypoints.push({
				location: myLatLng,
				stopover: true
			});
		}
		
		// Grab the first waypoint for the 'origin' location
		origin = (waypoints.shift()).location;
		// Grab the last waypoint for use as a 'destination' location
		destination = waypoints.pop();
		if(destination === undefined){
			// Unless there was no destination location for some reason?
			destination = origin;
		} else {
			destination = destination.location;
		}
		
		// Let's create the Google Maps request object
		var request = {
			origin: origin,
			destination: destination,
			waypoints: waypoints,
			//optimizeWaypoints: true, // fastes way
			travelMode: 'WALKING',
			unitSystem: google.maps.UnitSystem.METRIC
		}

		// and save it in our requestArray
		requestArray.push({"route": route, "request": request});	
	}
	
	processRequests(map, requestArray, renderArray);
}

function processRequests(map, requestArray, renderArray){
	// Counter to track request submission and process one at a time;
	var i = 0;

	// Direction service to build the route
	var directionsService = new google.maps.DirectionsService();
	
	// This request is just to kick start the whole process
	submitRequest();
	
	// Used to submit the request 'i'
	function submitRequest(){
		directionsService.route(requestArray[i].request, directionResults);
	}
	
	// Used as callback for the above request for current 'i'
	function directionResults(result, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			
			// Create a unique DirectionsRenderer 'i'
			renderArray[i] = new google.maps.DirectionsRenderer();
			renderArray[i].setMap(map);
									
			// Some unique options from the colorArray so we can see the routes
			renderArray[i].setOptions({
				preserveViewport: true,
				suppressInfoWindows: true,
				suppressMarkers: true,
				polylineOptions: {
					strokeWeight: 4,
					strokeOpacity: 0.8,
					strokeColor: '#' + requestArray[i].route.strokeColor
				}
			});
			
			// Use this new renderer with the result
			renderArray[i].setDirections(result);
			// wait because the google maps directions api receives to much requests
			wait(400);
			// and start the next request
			nextRequest();
		} else {
			console.log('Directionservice Error: ' + status);
		}
	}
	
	function wait(ms){
	   var start = new Date().getTime();
	   var end = start;
	   while(end < start + ms) {
		   end = new Date().getTime();
	   }
	}
	
	function nextRequest(){
		// Increase the counter
		i++;
		
		// Make sure we are still waiting for a request
		if(i < requestArray.length){
			// Submit another request
			submitRequest();
		}

		// No more to do
		return;
	}
}