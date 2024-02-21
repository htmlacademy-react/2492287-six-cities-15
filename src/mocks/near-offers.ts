import { OfferTypes, City, TOffer } from '../const';

export const nearOffers: Array<TOffer> = [
  {
    id: 1,
    price: 80,
    title: 'Wood and stone place',
    offerType: OfferTypes.Room,
    ratingPercent: 80,
    imageName: 'room.jpg',
    city: City.Amsterdam,
    isBookmark: true,
    isPremium: false
  },
  {
    id: 2,
    price: 132,
    title: 'Canal View Prinsengracht',
    offerType: OfferTypes.Apartment,
    ratingPercent: 80,
    imageName: 'apartment-02.jpg',
    city: City.Amsterdam,
    isBookmark: false,
    isPremium: false
  },
  {
    id: 3,
    price: 180,
    title: 'Nice, cozy, warm big bed apartment',
    offerType: OfferTypes.Apartment,
    ratingPercent: 100,
    imageName: 'apartment-03.jpg',
    city: City.Amsterdam,
    isBookmark: false,
    isPremium: true
  }
];
