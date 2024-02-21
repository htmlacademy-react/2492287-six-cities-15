import { offers } from '../../../mocks/offers';

export const validate = (id: string): boolean => ((offers.length > 0) && offers.some((e) => e.id.toString() === id));
