export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum OfferTypes {
  Room = 'Room',
  Apartment = 'Apartment'
}

export enum Place {
  Amsterdam = 'Amsterdam',
  Cologne = 'Cologne',
  Paris = 'Paris',
  Brussels = 'Brussels',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export type TOffer = {
  id: number;
  price: number;
  title: string;
  offerType: OfferTypes;
  ratingPercent: number;
  imageName: string;
  place: Place;
  isBookmark?: boolean;
  isPremium?: boolean;
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

