import { OfferTypes, TOffer } from '../const';

export const favoriteOffers: Array<TOffer> = [
  {
    id: 1,
    price: 180,
    isPremium: true,
    title: 'Nice, cozy, warm big bed apartment',
    offerType: OfferTypes.Apartment,
    rating: 5,
    imageName: 'apartment-small-03.jpg',
    cityId: 1,
    isBookmark: true,
    lat: 52.3909553943508,
    lng: 4.85309666406198
  },
  {
    id: 2,
    price: 80,
    title: 'Wood and stone place',
    offerType: OfferTypes.Room,
    rating: 4,
    imageName: 'room-small.jpg',
    cityId: 1,
    isBookmark: true,
    lat: 52.3609553943508,
    lng: 4.85309666406198
  },
  {
    id: 3,
    price: 180,
    title: 'White castle',
    offerType: OfferTypes.Apartment,
    rating: 5,
    imageName: 'apartment-small-04.jpg',
    cityId: 1,
    isBookmark: true,
    lat: 52.3909553943508,
    lng: 4.929309666406198
  }
];
