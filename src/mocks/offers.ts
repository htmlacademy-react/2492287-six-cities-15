import Place from '../shared/place';
import Currency from '../shared/currency';
import { TOffer } from '../shared/offer';
import OfferTypes from '../shared/offer-types';

export const offers: Array<TOffer> = [
  {
    id: 1,
    price: 120,
    currency: Currency.EU,
    isPremium: true,
    title: 'Beautiful & luxurious apartment at great location',
    offerType: OfferTypes.Apartment,
    ratingPercent: 80,
    imageName: 'apartment-01.jpg',
    place: Place.Amsterdam
  },
  {
    id: 2,
    price: 80,
    currency: Currency.EU,
    title: 'Wood and stone place',
    offerType: OfferTypes.Room,
    ratingPercent: 80,
    imageName: 'room.jpg',
    place: Place.Amsterdam,
    isBookmark: true
  },
  {
    id: 3,
    price: 132,
    currency: Currency.EU,
    title: 'Canal View Prinsengracht',
    offerType: OfferTypes.Apartment,
    ratingPercent: 80,
    imageName: 'apartment-02.jpg',
    place: Place.Amsterdam
  },
  {
    id: 4,
    price: 180,
    currency: Currency.EU,
    title: 'Nice, cozy, warm big bed apartment',
    offerType: OfferTypes.Apartment,
    ratingPercent: 100,
    imageName: 'apartment-03.jpg',
    place: Place.Amsterdam
  },
  {
    id: 5,
    price: 80,
    currency: Currency.EU,
    title: 'Wood and stone place',
    offerType: OfferTypes.Room,
    ratingPercent: 80,
    imageName: 'room.jpg',
    place: Place.Amsterdam,
    isBookmark: true
  }
];
