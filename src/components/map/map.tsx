import {useRef, useEffect, FC} from 'react';
import { Marker, layerGroup} from 'leaflet';
import useMap from '../../hooks/use-map';
import {TCity, TPoint} from '../../const';
import 'leaflet/dist/leaflet.css';
import { ZOOM_MAP_DEFAULT } from '../../hooks/const';
import { currentCustomIcon, defaultCustomIcon } from './const';

type MapProps = {
  city: TCity;
  points: TPoint[];
  selectedPoint: TPoint | null;
};

export const Map: FC<MapProps> = ({city, points, selectedPoint}) => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    map?.panTo({lat: city.location.latitude, lng: city.location.longitude});
    map?.setZoom(ZOOM_MAP_DEFAULT);
  }, [city, map]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });

        const isSelected = selectedPoint !== undefined
          && point.location.latitude === selectedPoint?.location.latitude
          && point.location.longitude === selectedPoint.location.longitude;

        marker.setIcon(isSelected ? currentCustomIcon : defaultCustomIcon).addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPoint]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
};
