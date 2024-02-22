import { OfferTypes, TOffer } from '../const';

export const offers: Array<TOffer> = [
  {
    id: 1,
    price: 120,
    isPremium: true,
    title: 'Beautiful & luxurious apartment at great location',
    offerType: OfferTypes.Apartment,
    rating: 4,
    imageName: 'apartment-01.jpg',
    cityId: 1,
    lat: 52.3909553943508,
    lng: 4.85309666406198
  },
  {
    id: 2,
    price: 83,
    title: 'Some good place',
    offerType: OfferTypes.Room,
    rating: 4,
    imageName: 'room.jpg',
    cityId: 1,
    isBookmark: true,
    lat: 52.3609553943508,
    lng: 4.85309666406198
  },
  {
    id: 3,
    price: 132,
    title: 'Canal View Prinsengracht',
    offerType: OfferTypes.Apartment,
    rating: 4,
    imageName: 'apartment-02.jpg',
    cityId: 1,
    lat: 52.3909553943508,
    lng: 4.929309666406198
  },
  {
    id: 4,
    price: 180,
    title: 'Nice, cozy, warm big bed apartment',
    offerType: OfferTypes.Apartment,
    rating: 5,
    imageName: 'apartment-03.jpg',
    cityId: 1,
    lat: 52.3809553943508,
    lng: 4.939309666406198
  },
  {
    id: 5,
    price: 80,
    title: 'Wood and stone place',
    offerType: OfferTypes.Room,
    rating: 4,
    imageName: 'room.jpg',
    cityId: 1,
    isBookmark: true,
    lat: 52.3909553943508,
    lng: 4.939309666406198
  }
];
