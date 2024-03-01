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

export type OfferType = keyof typeof OfferTypes;

export enum LogoLocation {
  Header = 'Header',
  Footer = 'Footer'
}

type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type TCity = {
  name: string;
  location: TLocation;
}

export type TOffer = {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  previewImage: string;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export type TUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}
type TOfferAdditional = {
  description: string;
  bedrooms: number;
  goods: string[];
  host: TUser;
  images: string[];
  maxAdults: number;
}
export type TOfferFull = TOffer & TOfferAdditional;

export const URL_MARKER_DEFAULT = '/img/pin.svg';

export const URL_MARKER_CURRENT = '/img/pin-active.svg';

export type TPoint = Pick<TOffer, 'title' | 'location'>;

export const cities: TCity[] = [
  {name: 'Paris', location: {latitude: 48.85661, longitude: 2.351499, zoom: 13}},
  {name: 'Cologne', location: {latitude: 50.938361, longitude: 6.959974, zoom: 13}},
  {name: 'Brussels', location: {latitude: 50.846557, longitude: 4.351697, zoom: 13}},
  {name: 'Amsterdam', location: {latitude: 52.37454, longitude: 4.897976, zoom: 13}},
  {name: 'Hamburg', location: {latitude: 53.550341, longitude: 10.000654, zoom: 13}},
  {name: 'Dusseldorf', location: {latitude: 51.225402, longitude: 6.776314, zoom: 13}}
];

export enum OfferSortType{
  Popular = 'Popular',
  PriceLowHigh = 'Price: low to high',
  PriceHighLow = 'Price: high to low',
  TopRated = 'Top rated first'
}

export type TState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;

export type TAuthData = {
  login: string;
  password: string;
};

export type TUserData = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
};

export type TErrorData = {
  type: string;
  message: string;
}

export type TLoginError = {
    property: string;
    value: string;
    messages: string[];
}

export type TReview = {
  comment: string;
  rating: number;
  offerId: string;
}

export type TReviewFull = TReview & {
id: string;
date: string;
user: TUser;
}
