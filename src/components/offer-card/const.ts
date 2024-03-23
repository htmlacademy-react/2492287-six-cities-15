export enum OfferCardType {
  City = 'City',
  Favorite = 'Favorite',
  Near = 'Near'
}

export type TOfferCardType = keyof typeof OfferCardType;

export type TImageSize = {
  Width: number;
  Height: number;
}

export const ImageSize = {
  Small: {
    Width: 150,
    Height: 110
  },
  Large: {
    Width: 260,
    Height: 200
  }
};

export const FavoriteButtonSize = {
  height: 19,
  width: 18
} as const;

export const CardClassName = {
  City: 'cities__card',
  Favorite: 'favorites__card',
  Near: 'near-places__card'
} as const;

export const CardImageClassName = {
  City: 'cities__image',
  Favorite: 'favorites__image-wrapper',
  Near: 'near-places__image-wrapper'
} as const;

export const CARD_INFO_CLASS = 'favorites__card-info';

export const ALT_IMAGE_TEXT = 'Place image';
