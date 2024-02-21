import { offers } from '../../../mocks/offers';

export const validate = (id?: string): boolean => {
  if (!id){
    return false;
  }
  return offers.some((e) => e.id.toString() === id);
};
