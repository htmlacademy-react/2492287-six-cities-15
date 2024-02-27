import { store } from './store';

export const APP_TITLE = '6 cities';

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum OfferTypes {
  Room = 'Room',
  Apartment = 'Apartment',
  House = 'House',
  Hotel = 'Hotel'
}

export type TCity = {
  id: number;
  name: string;
  lat: number;
  lng: number;
}

export enum LogoLocation {
  Header = 'Header',
  Footer = 'Footer'
}

export type TOffer = {
  id: number;
  price: number;
  title: string;
  offerType: OfferTypes;
  rating: number;
  imageName: string;
  cityId: number;
  isBookmark?: boolean;
  isPremium?: boolean;
  lat: number;
  lng: number;
}

export type TReview = {
  id: number;
  rating: number;
  review: string;
  avatar: string;
  date: Date;
  userName: string;
  offerId: number;
}

export const URL_MARKER_DEFAULT = '/img/pin.svg';

export const URL_MARKER_CURRENT = '/img/pin-active.svg';

export type TPoint = Pick<TOffer, 'title' | 'lat' | 'lng'>;

export const cities: TCity[] = [
  {id: 0, name: 'Paris', lat: 48.8509553943508, lng: 2.35309666406198},
  {id: 1, name: 'Cologne', lat: 50.9309553943508, lng: 6.94309666406198},
  {id: 2, name: 'Brussels', lat: 50.8509553943508, lng: 4.35309666406198},
  {id: 3, name: 'Amsterdam', lat: 52.3709553943508, lng: 4.91309666406198},
  {id: 4, name: 'Hamburg', lat: 53.5509553943508, lng: 10.00309666406198},
  {id: 5, name: 'Dusseldorf', lat: 51.2209553943508, lng: 6.77309666406198}
];

export enum OfferSortType{
  Popular = 'Popular',
  PriceLowHigh = 'Price: low to high',
  PriceHighLow = 'Price: high to low',
  TopRated = 'Top rated first'
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
