import { AppRoute } from '../../../app';
import { CARD_INFO_CLASS, CardClassName, CardImageClassName,
  ImageSize, OfferCardType, TImageSize, TOfferCardType } from '../const';

export const getCardClassName = (offerCardType: TOfferCardType): string => {
  switch (offerCardType){
    case OfferCardType.City: return CardClassName.City;
    case OfferCardType.Favorite: return CardClassName.Favorite;
    case OfferCardType.Near: return CardClassName.Near;
    default: return '';
  }
};

export const getCardImageClassName = (offerCardType: TOfferCardType): string => {
  switch (offerCardType){
    case OfferCardType.City: return CardImageClassName.City;
    case OfferCardType.Favorite: return CardImageClassName.Favorite;
    case OfferCardType.Near: return CardImageClassName.Near;
    default: return '';
  }
};

export const getCardInfoClassName = (offerCardType: TOfferCardType): string => {
  if (offerCardType === OfferCardType.Favorite){
    return CARD_INFO_CLASS;
  }
  return '';
};

export const getCardImageSize = (offerCardType: TOfferCardType): TImageSize => {
  if (offerCardType === OfferCardType.Favorite){
    return ImageSize.Small;
  }
  return ImageSize.Large;
};

export const getOfferLinkById = (id: string) => AppRoute.Offer.replace(':id', id);
