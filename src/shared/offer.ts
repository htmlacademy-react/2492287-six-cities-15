import Place from './place';
import Currency from './currency';
import OfferTypes from './offer-types';

export type TOffer = {
  id: number;
  price: number;
  currency: Currency;
  title: string;
  offerType: OfferTypes;
  ratingPercent: number;
  imageName: string;
  place: Place;
  isBookmark?: boolean;
  isPremium?: boolean;
}
