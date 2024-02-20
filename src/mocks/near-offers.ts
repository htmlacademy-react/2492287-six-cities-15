import Currency from '../shared/currency';
import { TOffer } from '../shared/offer';
import OfferTypes from '../shared/offer-types';
import Place from '../shared/place';


export const nearOffers: Array<TOffer> = [
  {
    id: 1,
    price: 80,
    currency:Currency.EU,
    title: 'Wood and stone place',
    offerType: OfferTypes.Room,
    ratingPercent: 80,
    isBookmark: true,
    imageName: 'room.jpg',
    place: Place.Amsterdam
  },
  {
    id: 2,
    price: 132,
    currency:Currency.EU,
    title: 'Canal View Prinsengracht',
    offerType: OfferTypes.Apartment,
    ratingPercent: 80,
    imageName: 'apartment-02.jpg',
    place: Place.Amsterdam
  },
  {
    id: 3,
    price: 180,
    currency:Currency.EU,
    isPremium: true,
    title: 'Nice, cozy, warm big bed apartment',
    offerType: OfferTypes.Apartment,
    ratingPercent: 100,
    imageName: 'apartment-03.jpg',
    place: Place.Amsterdam
  }
];
