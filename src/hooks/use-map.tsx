import {useEffect, useState, MutableRefObject, useRef} from 'react';
import {Map, TileLayer} from 'leaflet';
import { TCity } from '../const';
import { MapConfig } from './const';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: TCity
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    let mounted = true;

    if (mapRef && mapRef.current !== null && !isRenderedRef.current) {

      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude
        },
        zoom: MapConfig.ZoomMapDefault
      });

      const layer = new TileLayer(
        MapConfig.UrlTemplate, { attribution: MapConfig.TileLayerAttribute }
      );

      instance.addLayer(layer);

      if(mounted){
        setMap(instance);
        isRenderedRef.current = true;
      }
      return () => {
        mounted = false;
      };
    }
  }, [mapRef, city]);

  return map;
}

export default useMap;
