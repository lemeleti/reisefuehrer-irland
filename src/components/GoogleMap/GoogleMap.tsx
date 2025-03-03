import { useMemo } from 'react';

// Components
import GoogleMapDirections from '../GoogleMapDirections/GoogleMapDirections';
import {
  AdvancedMarker,
  APIProvider,
  Map,
  Pin,
} from '@vis.gl/react-google-maps';

// Util
import { scrollToElement } from '../../util';

// Data
import { Route } from '../../data/maps';
import { GoogleMapProps, ScrollToTypeEnum } from './types';

const GoogleMap: React.FC<GoogleMapProps> = ({
  routes,
  scrollToType = ScrollToTypeEnum.ROUTE,
}) => {
  const content = useMemo(() => {
    const computeMarkers = (route: Route) => {
      return route.points.map((point, index) => (
        <AdvancedMarker
          key={`${route.id}-${index}`}
          position={{ lat: point.lat, lng: point.lng }}
          onClick={() => {
            if (
              (scrollToType === ScrollToTypeEnum.ROUTE && !point.shared) ||
              scrollToType === ScrollToTypeEnum.POINT
            ) {
              scrollToElement(scrollToType === ScrollToTypeEnum.ROUTE ? route.id : point.id);
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
    return { lat: 53.34947, lng: -6.27617 };
  }, [routes]);

  const map = useMemo(
    () => (
      <div className="relative h-[300px] my-4">
        <Map
          key={!Array.isArray(routes) ? routes.id : 'routes'}
          mapId={'map'}
          className="absolute left-1/2 -translate-x-1/2 z-50 h-full w-[85vw] "
          defaultCenter={center}
          defaultZoom={zoom}
        >
          {content}
          <GoogleMapDirections routes={routes} />
        </Map>
      </div>
    ),
    [routes, center, zoom, content],
  );

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      {map}
    </APIProvider>
  );
};

export default GoogleMap;
