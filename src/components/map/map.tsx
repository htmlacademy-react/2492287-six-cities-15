import {useRef, useEffect, FC} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import useMap from '../../hooks/use-map';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT, TCity, TPoint} from '../../const';
import 'leaflet/dist/leaflet.css';
import { ZOOM_MAP_DEFAULT } from '../../hooks/const';

type MapProps = {
  city: TCity;
  points: TPoint[];
  selectedPoint: TPoint | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export const Map: FC<MapProps> = ({city, points, selectedPoint}) => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    map?.panTo({lat: city.lat, lng: city.lng});
    map?.setZoom(ZOOM_MAP_DEFAULT);
  }, [city, map]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.lat === selectedPoint.lat && point.lng === selectedPoint.lng
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPoint]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
};
