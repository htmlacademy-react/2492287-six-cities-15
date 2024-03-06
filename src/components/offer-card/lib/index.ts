import { AppRoute } from '../../../app';

export enum OfferCardType {
  City = 'City',
  Favorite = 'Favorite',
  Near = 'Near'
}

export const getCardClassName = (offerCardType: OfferCardType): string => {
  switch (offerCardType){
    case OfferCardType.City: return 'cities__card';
    case OfferCardType.Favorite: return 'favorites__card';
    case OfferCardType.Near: return 'near-places__card';
    default: return '';
  }
};

export const getCardImageClassName = (offerCardType: OfferCardType): string => {
  switch (offerCardType){
    case OfferCardType.City: return 'cities__image';
    case OfferCardType.Favorite: return 'favorites__image-wrapper';
    case OfferCardType.Near: return 'near-places__image-wrapper';
    default: return '';
  }
};

export const getCardInfoClassName = (offerCardType: OfferCardType): string => {
  switch (offerCardType){
    case OfferCardType.Favorite: return 'favorites__card-info';
    default: return '';
  }
};

export type ImageSize = {
  width: number;
  height: number;
}

export const getCardImageSize = (offerCardType: OfferCardType): ImageSize => {
  switch (offerCardType){
    case OfferCardType.Favorite: return {width: 150, height: 110};
    default: return {width: 260, height: 200};
  }
};

export const getOfferLinkById = (id: string) => AppRoute.Offer.replace(':id', id);
