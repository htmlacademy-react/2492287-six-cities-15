import { AppRoute } from '../../../app';
import { TImageSize, TOfferCardType } from '../const';

export const getCardClassName = (offerCardType: TOfferCardType): string => {
  switch (offerCardType){
    case 'City': return 'cities__card';
    case 'Favorite': return 'favorites__card';
    case 'Near': return 'near-places__card';
    default: return '';
  }
};

export const getCardImageClassName = (offerCardType: TOfferCardType): string => {
  switch (offerCardType){
    case 'City': return 'cities__image';
    case 'Favorite': return 'favorites__image-wrapper';
    case 'Near': return 'near-places__image-wrapper';
    default: return '';
  }
};

export const getCardInfoClassName = (offerCardType: TOfferCardType): string => {
  switch (offerCardType){
    case 'Favorite': return 'favorites__card-info';
    default: return '';
  }
};

export const getCardImageSize = (offerCardType: TOfferCardType): TImageSize => {
  switch (offerCardType){
    case 'Favorite': return {width: 150, height: 110};
    default: return {width: 260, height: 200};
  }
};

export const getOfferLinkById = (id: string) => AppRoute.Offer.replace(':id', id);
