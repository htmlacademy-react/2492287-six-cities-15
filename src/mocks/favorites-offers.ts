import { offers } from './offers';

export const getFavoriteOffers = () => (
  [...offers.filter((item) => item?.isBookmark)]
);
