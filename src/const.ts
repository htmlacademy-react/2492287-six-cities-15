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
  {id: 1, name: 'Paris', lat: 52.3909553943508, lng: 4.90309666406198},
  {id: 2, name: 'Cologne', lat: 52.3909553943508, lng: 4.85309666406198},
  {id: 3, name: 'Brussels', lat: 52.3909553943508, lng: 4.85309666406198},
  {id: 4, name: 'Amsterdam', lat: 52.3909553943508, lng: 4.95309666406198},
  {id: 5, name: 'Hamburg', lat: 52.3909553943508, lng: 4.85309666406198},
  {id: 6, name: 'Dusseldorf', lat: 52.3909553943508, lng: 4.85309666406198}
];

export enum OfferSortType{
  Popular = 'Popular',
  PriceLowHigh = 'Price: low to high',
  PriceHighLow = 'Price: high to low',
  TopRated = 'Top rated first'
}
