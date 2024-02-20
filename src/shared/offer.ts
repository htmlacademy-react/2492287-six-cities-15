import Place from './place';
import OfferTypes from './offer-types';

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
