import { TButtonType } from '../const';

export const getBookmarkClass = (offerIsFavorite: boolean, typeCard: TButtonType) => (
  offerIsFavorite ? ` ${typeCard}__bookmark-button--active` : ''
);
