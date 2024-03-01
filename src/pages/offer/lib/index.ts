//import { offers } from '../../../mocks/offers';

import { TOffer } from '../../../const';

export const validate = (id: string, offers: TOffer[]): boolean => ((offers.length > 0) && offers.some((e) => e.id.toString() === id));

const getHypotenuse = (side1: number, side2: number) => Math.sqrt(side1 ** 2 + side2 ** 2);

export const getNearOffers = (offer: TOffer, offers: TOffer[]) => {
  const result = [...offers.filter((item) => (item?.city.name === offer?.city.name) && (item?.id !== offer?.id))]
    .sort((item1, item2) => {
      const length1 = getHypotenuse(Math.abs(offer.location.latitude - item1.location.latitude), Math.abs(offer.location.longitude - item1.location.longitude));
      const length2 = getHypotenuse(Math.abs(offer.location.latitude - item2.location.latitude), Math.abs(offer.location.longitude - item2.location.longitude));
      return length1 - length2;
    });
  if (result.length > 3){
    result.splice(3, result.length - 3);
  }
  return result;
};
