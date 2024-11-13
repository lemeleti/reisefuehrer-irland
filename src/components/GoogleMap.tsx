import {
  AdvancedMarker,
  APIProvider,
  Map,
  Pin,
  useMap,
  useMapsLibrary,
} from '@vis.gl/react-google-maps';
import { Route, ROUTES } from '../maps';
import { useEffect, useState } from 'react';

const GoogleMap: React.FC = () => {
  return (
    <APIProvider apiKey="AIzaSyCEllN8xXYe2LO5DTyPJ_yMbhy__B_g78g">
      <Map
        mapId={'map'}
        className="relative z-50 h-[300px] w-[85vw] my-4"
        defaultCenter={{ lat: 53.34547, lng: -6.26417 }}
        defaultZoom={13}
      >
        {ROUTES.map((route) =>
          route.points.map(({ name, lat, lng, id, color }, index) => (
            <AdvancedMarker
              key={`${route.id}-${index}`}
              position={{ lat, lng }}
            >
              <Pin background={`#${color}`} />
            </AdvancedMarker>
          )),
        )}
        <Directions routes={ROUTES} />
      </Map>
    </APIProvider>
  );
};

const Directions: React.FC<{ routes: Route[] | Route }> = ({ routes }) => {
  const map = useMap();
  const routesLibrary = useMapsLibrary('routes');

  const [directionsService, setDirectionsService] =
    useState<google.maps.DirectionsService>();

  const [directionsRenderers, setDirectionsRenderers] = useState<
    google.maps.DirectionsRenderer[]
  >([]);

  useEffect(() => {
    if (!routesLibrary || !map) {
      return;
    }

    setDirectionsService(new routesLibrary.DirectionsService());

    if (Array.isArray(routes)) {
      for (const _ of routes) {
        setDirectionsRenderers((prevRenderers) => [
          ...prevRenderers,
          new routesLibrary.DirectionsRenderer({ map }),
        ]);
      }
    } else {
      setDirectionsRenderers((prevRenderers) => [
        ...prevRenderers,
        new routesLibrary.DirectionsRenderer({ map }),
      ]);
    }
  }, [routesLibrary, map]);

  useEffect(() => {
    if (directionsRenderers.length === 0 || !directionsService) {
      return;
    }

    async function computeRoute(
      route: Route,
      renderer: google.maps.DirectionsRenderer,
    ) {
      const points = route.points;

      let origin;
      let destination;
      let waypoints = [];
      let lastPoint;

      for (let p = 0; p < points.length; p++) {
        if (points[p] === lastPoint) {
          // Duplicate of the last waypoint - don't bother
          continue;
        }
        // Prepare the lastpoint for the next loop
        lastPoint = points[p];

        // Add this to waypoint to the array for making the request
        var myLatLng = new google.maps.LatLng(lastPoint.lat, lastPoint.lng);
        waypoints.push({
          location: myLatLng,
          stopover: true,
        });
      }

      // Grab the first waypoint for the 'origin' location
      origin = waypoints.shift()!.location;

      // Grab the last waypoint for use as a 'destination' location
      destination = waypoints.pop();
      if (destination === undefined) {
        // Unless there was no destination location for some reason?
        destination = origin;
      } else {
        destination = destination.location;
      }

      directionsService?.route(
        {
          origin,
          destination,
          waypoints,
          travelMode: google.maps.TravelMode.WALKING,
          unitSystem: google.maps.UnitSystem.METRIC,
        },
        (res, status) =>
          handleResults(res, status, renderer, route.strokeColor),
      );
    }

    const handleResults = (
      result: google.maps.DirectionsResult | null,
      status: google.maps.DirectionsStatus,
      renderer: google.maps.DirectionsRenderer,
      color: string,
    ) => {
      if (status !== google.maps.DirectionsStatus.OK) {
        console.log('Directionservice Error: ' + status);
        return;
      }

      renderer.setOptions({
        preserveViewport: true,
        suppressInfoWindows: true,
        suppressMarkers: true,
        polylineOptions: {
          strokeWeight: 4,
          strokeOpacity: 0.8,
          strokeColor: '#' + color,
        },
      });

      renderer.setDirections(result);
    };

    if (Array.isArray(routes)) {
      for (const [i, route] of routes.entries()) {
        computeRoute(route, directionsRenderers[i]);
      }
    } else {
      computeRoute(routes as unknown as Route, directionsRenderers[0]);
    }
  }, [directionsRenderers, directionsService]);

  return null;
};

export default GoogleMap;
