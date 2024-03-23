import { TButtonTypeClassName } from '../const';

export const getBookmarkClass = (offerIsFavorite: boolean, buttonType: TButtonTypeClassName) => (
  offerIsFavorite ? ` ${buttonType}__bookmark-button--active` : ''
);
