import Currency from '../shared/currency';
import { TOffer } from '../shared/offer';
import OfferTypes from '../shared/offer-types';
import Place from '../shared/place';

export const favoriteOffers: Array<TOffer> = [
  {
    id: 1,
    price: 180,
    currency: Currency.EU,
    isPremium: true,
    title: 'Nice, cozy, warm big bed apartment',
    offerType: OfferTypes.Apartment,
    ratingPercent: 100,
    imageName: 'apartment-small-03.jpg',
    place: Place.Amsterdam,
    isBookmark: true
  },
  {
    id: 2,
    price: 80,
    currency: Currency.EU,
    title: 'Wood and stone place',
    offerType: OfferTypes.Room,
    ratingPercent: 80,
    imageName: 'room-small.jpg',
    place: Place.Amsterdam,
    isBookmark: true
  },
  {
    id: 3,
    price: 180,
    currency: Currency.EU,
    title: 'White castle',
    offerType: OfferTypes.Apartment,
    ratingPercent: 100,
    imageName: 'apartment-small-04.jpg',
    place: Place.Cologne,
    isBookmark: true
  }
];
