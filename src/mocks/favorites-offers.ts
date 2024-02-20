import { OfferTypes, Place, TOffer } from '../const';

export const favoriteOffers: Array<TOffer> = [
  {
    id: 1,
    price: 180,
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
    title: 'White castle',
    offerType: OfferTypes.Apartment,
    ratingPercent: 100,
    imageName: 'apartment-small-04.jpg',
    place: Place.Cologne,
    isBookmark: true
  }
];
