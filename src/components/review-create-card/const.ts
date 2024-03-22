export const ratings = [
  {value: 5, name: 'perfect'},
  {value: 4, name: 'good'},
  {value: 3, name: 'not bad'},
  {value: 2, name: 'badly'},
  {value: 1, name: 'terribly'}
];

export const reviewInitialState = {
  rating: 0,
  comment: '',
  offerId: ''
} as const;

export const CommentSize = {
  Min: 50,
  Max: 300
};

export const RatingLimit = {
  Min: 1,
  Max: 5
};
