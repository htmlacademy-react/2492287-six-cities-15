import { OfferTypes, City, TOffer } from '../const';

export const offers: Array<TOffer> = [
  {
    id: 1,
    price: 120,
    isPremium: true,
    title: 'Beautiful & luxurious apartment at great location',
    offerType: OfferTypes.Apartment,
    ratingPercent: 80,
    imageName: 'apartment-01.jpg',
    city: City.Amsterdam
  },
  {
    id: 2,
    price: 80,
    title: 'Wood and stone place',
    offerType: OfferTypes.Room,
    ratingPercent: 80,
    imageName: 'room.jpg',
    city: City.Amsterdam,
    isBookmark: true
  },
  {
    id: 3,
    price: 132,
    title: 'Canal View Prinsengracht',
    offerType: OfferTypes.Apartment,
    ratingPercent: 80,
    imageName: 'apartment-02.jpg',
    city: City.Amsterdam
  },
  {
    id: 4,
    price: 180,
    title: 'Nice, cozy, warm big bed apartment',
    offerType: OfferTypes.Apartment,
    ratingPercent: 100,
    imageName: 'apartment-03.jpg',
    city: City.Amsterdam
  },
  {
    id: 5,
    price: 80,
    title: 'Wood and stone place',
    offerType: OfferTypes.Room,
    ratingPercent: 80,
    imageName: 'room.jpg',
    city: City.Amsterdam,
    isBookmark: true
  }
];
