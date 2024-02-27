import { TOffer } from '../const';
import { offers } from './offers';

const getHypotenuse = (side1: number, side2: number) => Math.sqrt(side1 ** 2 + side2 ** 2);

export const getNearOffers = (offer: TOffer) => {
  const result = [...offers.filter((item) => (item?.cityId === offer?.cityId) && (item?.id !== offer?.id))]
    .sort((item1, item2) => {
      const length1 = getHypotenuse(Math.abs(offer.lat - item1.lat), Math.abs(offer.lng - item1.lng));
      const length2 = getHypotenuse(Math.abs(offer.lat - item2.lat), Math.abs(offer.lng - item2.lng));
      return length1 - length2;
    });
  if (result.length > 3){
    result.splice(3, result.length - 3);
  }
  return result;
};
