import Currency from "../shared/currency";
import OfferTypes from "../shared/offer-types";

export type TOffer = {
  id: number;
  price: number;
  currency: Currency;
  title: string;
  offerType: OfferTypes;
  ratingPercent: number;
  imageName: string;
  isBookmark?: boolean;
  isPremium?: boolean;
}

export const offers: Array<TOffer> = [
  {
    id: 1,
    price: 120,
    currency: Currency.EU,
    isPremium: true,
    title: 'Beautiful & luxurious apartment at great location',
    offerType: OfferTypes.Apartment,
    ratingPercent: 80,
    imageName: 'apartment-01.jpg'
  },
  {
    id: 2,
    price: 80,
    currency: Currency.EU,
    title: 'Wood and stone place',
    offerType: OfferTypes.Room,
    ratingPercent: 80,
    imageName: 'room.jpg',
    isBookmark: true
  },
  {
    id: 3,
    price: 132,
    currency: Currency.EU,
    title: 'Canal View Prinsengracht',
    offerType: OfferTypes.Apartment,
    ratingPercent: 80,
    imageName: 'apartment-02.jpg'
  },
  {
    id: 4,
    price: 180,
    currency: Currency.EU,
    title: 'Nice, cozy, warm big bed apartment',
    offerType: OfferTypes.Apartment,
    ratingPercent: 100,
    imageName: 'apartment-03.jpg'
  },
  {
    id: 5,
    price: 80,
    currency: Currency.EU,
    title: 'Wood and stone place',
    offerType: OfferTypes.Room,
    ratingPercent: 80,
    imageName: 'room.jpg',
    isBookmark: true
  }
]
