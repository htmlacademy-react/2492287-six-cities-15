import {useEffect, useState, MutableRefObject, useRef} from 'react';
import {Map, TileLayer} from 'leaflet';
import { TCity } from '../const';
import { TILE_LAYER_ATTRIBUTE, URL_TEMPLATE, ZOOM_MAP_DEFAULT } from './const';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: TCity
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.lat,
          lng: city.lng
        },
        zoom: ZOOM_MAP_DEFAULT
      });

      const layer = new TileLayer(
        URL_TEMPLATE, { attribution: TILE_LAYER_ATTRIBUTE }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}

export default useMap;
