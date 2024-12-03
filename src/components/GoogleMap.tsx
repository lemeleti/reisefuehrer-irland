import { useEffect, useMemo, useState } from 'react';
import {
  AdvancedMarker,
  APIProvider,
  Map,
  Pin,
  useMap,
  useMapsLibrary,
} from '@vis.gl/react-google-maps';

import { scrollToElement } from '../util';

import { Route } from '../data/maps';

type ScrollToType = 'ROUTE' | 'POINT';

type GoogleMapProps = {
  routes: Route[] | Route;
  scrollToType?: ScrollToType;
};

const GoogleMap: React.FC<GoogleMapProps> = ({
  routes,
  scrollToType = 'ROUTE',
}) => {
  const content = useMemo(() => {
    const computeMarkers = (route: Route) => {
      return route.points.map((point, index) => (
        <AdvancedMarker
          key={`${route.id}-${index}`}
          position={{ lat: point.lat, lng: point.lng }}
          onClick={() => {
            if (
              (scrollToType === 'ROUTE' && !point.shared) ||
              scrollToType === 'POINT'
            ) {
              scrollToElement(scrollToType === 'ROUTE' ? route.id : point.id);
            }
          }}
        >
          <Pin
            background={`#${point.shared ? 'D3D3D3' : route.strokeColor}`}
            borderColor={'#000'}
            glyphColor={'#fff'}
          />
        </AdvancedMarker>
      ));
    };

    if (Array.isArray(routes)) {
      return routes.map((route) => computeMarkers(route));
    }

    const route = routes;
    return computeMarkers(route);
  }, [routes, scrollToType]);

  const zoom = useMemo(() => {
    if (!Array.isArray(routes) && routes.zoom) {
      return routes.zoom;
    }
    return 13;
  }, [routes]);

  const center = useMemo(() => {
    if (!Array.isArray(routes) && routes.zoom) {
      return routes.center;
    }
    return { lat: 53.34547, lng: -6.26417 };
  }, [routes]);

  const map = useMemo(
    () => (
      <Map
        key={!Array.isArray(routes) ? routes.id : 'routes'}
        mapId={'map'}
        className="relative z-50 h-[300px] w-[85vw] my-4"
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {content}
        <Directions routes={routes} />
      </Map>
    ),
    [routes, center, zoom, content],
  );

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      {map}
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
      routes.forEach(() => {
        setDirectionsRenderers((prevRenderers) => [
          ...prevRenderers,
          new routesLibrary.DirectionsRenderer({ map }),
        ]);
      });
    } else {
      setDirectionsRenderers((prevRenderers) => [
        ...prevRenderers,
        new routesLibrary.DirectionsRenderer({ map }),
      ]);
    }
  }, [routesLibrary, map, routes]);

  useEffect(() => {
    if (directionsRenderers.length === 0 || !directionsService) {
      return;
    }

    async function computeRoute(
      route: Route,
      renderer: google.maps.DirectionsRenderer,
    ) {
      const points = route.points;

      let destination;
      const waypoints = [];
      let lastPoint;

      for (let p = 0; p < points.length; p++) {
        if (points[p] === lastPoint) {
          // Duplicate of the last waypoint - don't bother
          continue;
        }
        // Prepare the lastpoint for the next loop
        lastPoint = points[p];

        // Add this to waypoint to the array for making the request
        const myLatLng = new google.maps.LatLng(lastPoint.lat, lastPoint.lng);
        waypoints.push({
          location: myLatLng,
          stopover: true,
        });
      }

      // Grab the first waypoint for the 'origin' location
      const origin = waypoints.shift()!.location;

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
  }, [directionsRenderers, directionsService, routes]);

  return null;
};

export default GoogleMap;
