export const getBookmarkClass = (offerIsFavorite: boolean, typeCard: 'offer' | 'place-card') => offerIsFavorite ? ` ${typeCard}__bookmark-button--active` : '';
