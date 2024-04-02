import {useRef, useEffect, FC} from 'react';
import { Marker, layerGroup} from 'leaflet';
import useMap from '../../hooks/use-map';
import {TCity, TOffer} from '../../const';
import 'leaflet/dist/leaflet.css';
import './style/index.css';
import { TMapPositionClassName, currentCustomIcon, defaultCustomIcon } from './const';

export type TMapProps = {
  city: TCity;
  points: TOffer[];
  selectedPoint?: TOffer | null;
  mapPositionClassName: TMapPositionClassName;
};

export const Map: FC<TMapProps> = ({city, points, selectedPoint, mapPositionClassName}) => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    map?.panTo({lat: city.location.latitude, lng: city.location.longitude});
    map?.setZoom(city.location.zoom);
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

  return (
    <section
      className={`${mapPositionClassName}__map map`}
      data-testid='map'
    >
      <div className='map_height' ref={mapRef}></div>
    </section>
  );
};
