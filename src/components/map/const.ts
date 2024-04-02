import { Icon } from 'leaflet';

export enum MarkerUrl{
  Default = '/img/pin.svg',
  Current = '/img/pin-active.svg'
}

export const defaultCustomIcon = new Icon({
  iconUrl: MarkerUrl.Default,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export const currentCustomIcon = new Icon({
  iconUrl: MarkerUrl.Current,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export type TMapPositionClassName = 'offer' | 'cities';

