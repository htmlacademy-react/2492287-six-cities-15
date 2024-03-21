export const APP_TITLE = '6 cities';

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum OfferType {
  Room = 'Room',
  Apartment = 'Apartment',
  House = 'House',
  Hotel = 'Hotel'
}

export type TOfferType = keyof typeof OfferType;

export type TOffer = {
  id: string;
  title: string;
  type: TOfferType;
  price: number;
  previewImage: string;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}
export type TOffers = TOffer[];

type TOfferAdditional = {
  description: string;
  bedrooms: number;
  goods: string[];
  host: TUser;
  images: string[];
  maxAdults: number;
}
export type TOfferFull = TOffer & TOfferAdditional;

export type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type TCity = {
  name: string;
  location: TLocation;
}

export type TUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

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

export type TUserData = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
};

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

export type TReviewFulls = TReviewFull[];

export enum NameSpace {
  Offer = 'Offer',
  Favorite = 'Favorite',
  User = 'User',
  Review = 'Review'
}

export const OfferConfig = {
  imagesCount: 6,
  nearOffersCount: 3,
  reviewsCount: 10
} as const;
