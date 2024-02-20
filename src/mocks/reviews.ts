import { TReview } from '../shared/review';

export const reviews: Array<TReview> = [
  {
    id: 1,
    rating: 3,
    review: 'good place, bad service',
    avatar: 'avatar-max.jpg',
    date: new Date(2020, 2, 14),
    userName: 'Igor',
    offerId: 2
  },
  {
    id: 2,
    rating: 5,
    review: 'best room in the world. I\'ll be here next year',
    avatar: 'avatar-max.jpg',
    date: new Date(2019, 11, 7),
    userName: 'Igor',
    offerId: 2
  },
  {
    id: 3,
    rating: 1,
    review: 'never, NEVER will return here anymore',
    avatar: 'avatar-max.jpg',
    date: new Date(2014, 5, 5),
    userName: 'Igor',
    offerId: 2
  },
  {
    id: 4,
    rating: 4,
    review: `A quiet cozy and picturesque that hides behind a a river by
    the unique lightness of Amsterdam. The building is green and
    from 18th century.`,
    avatar: 'avatar-max.jpg',
    date: new Date(2019, 3, 24),
    userName: 'Max',
    offerId: 1
  }
];
