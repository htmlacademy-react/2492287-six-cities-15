import { Action } from 'redux';
import { company, datatype, image, random, lorem, name, internet } from 'faker';
import { AuthorizationStatus, OfferSortType, TOffer, TOfferFull, TReviewFull, cities } from '../const';
import { TOfferState } from '../store/offer-data/offer-data';
import { ThunkDispatch } from 'redux-thunk';
import { TState } from '../store/const';
import { createAPI } from '../services/api';

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

export type AppThunkDispatch = ThunkDispatch<TState, ReturnType<typeof createAPI>, Action>;

export const expectedEmptyOfferState: TOfferState = {
  activeCity: cities[0],
  offer: null,
  isOfferDataLoading: false,
  offers: [],
  isOffersDataLoading: false,
  nearOffers: [],
  isNearOffersDataLoading: false,
  favorites: [],
  isFavoritesDataLoading: false,
  offerSortType: OfferSortType.Popular
};

export const expectedOfferFull: TOfferFull = {
  id: datatype.uuid(),
  title: company.companyName(),
  type: 'Room',
  price: datatype.number(),
  previewImage: image.imageUrl(),
  city: cities[datatype.number(5)],
  location:{
    latitude: datatype.float(),
    longitude: datatype.float(),
    zoom: datatype.number()
  },
  isFavorite: datatype.boolean(),
  isPremium: datatype.boolean(),
  rating: datatype.number(5),
  description: datatype.string(),
  bedrooms: datatype.number(10),
  goods: random.arrayElements(),
  host: {
    name: name.firstName(),
    avatarUrl: image.imageUrl(),
    isPro: datatype.boolean()
  },
  images: random.arrayElements(),
  maxAdults: datatype.number()
};

export const expectedFavorites: TOffer[] = [
  {
    id: datatype.uuid(),
    title: lorem.text(),
    type: 'Room',
    price: 10,
    previewImage: image.imageUrl(),
    city: {
      name: company.companyName(),
      location: {
        latitude: datatype.float(),
        longitude: datatype.float(),
        zoom: datatype.number(),
      }
    },
    location: {
      latitude: datatype.float(),
      longitude: datatype.float(),
      zoom: datatype.number(),
    },
    isFavorite: false,
    isPremium: datatype.boolean(),
    rating: 2
  },
  {
    id: datatype.uuid(),
    title: lorem.text(),
    type: 'Room',
    price: 14,
    previewImage: image.imageUrl(),
    city: {
      name: company.companyName(),
      location: {
        latitude: datatype.float(),
        longitude: datatype.float(),
        zoom: datatype.number(),
      }
    },
    location: {
      latitude: datatype.float(),
      longitude: datatype.float(),
      zoom: datatype.number(),
    },
    isFavorite: false,
    isPremium: datatype.boolean(),
    rating: 5
  },
  {
    id: datatype.uuid(),
    title: lorem.text(),
    type: 'Hotel',
    price: 12,
    previewImage: image.imageUrl(),
    city: {
      name: company.companyName(),
      location: {
        latitude: datatype.float(),
        longitude: datatype.float(),
        zoom: datatype.number(),
      }
    },
    location: {
      latitude: datatype.float(),
      longitude: datatype.float(),
      zoom: datatype.number(),
    },
    isFavorite: false,
    isPremium: datatype.boolean(),
    rating: 1
  }
];

export const expectedOfferState: TOfferState = {
  activeCity: cities[0],
  offer: {
    id: datatype.uuid(),
    title: company.companyName(),
    type: 'Room',
    price: datatype.number(),
    previewImage: image.imageUrl(),
    city: cities[datatype.number(5)],
    location:{
      latitude: datatype.float(),
      longitude: datatype.float(),
      zoom: datatype.number()
    },
    isFavorite: datatype.boolean(),
    isPremium: datatype.boolean(),
    rating: datatype.number(5),
    description: datatype.string(),
    bedrooms: datatype.number(10),
    goods: random.arrayElements(),
    host: {
      name: name.firstName(),
      avatarUrl: image.imageUrl(),
      isPro: datatype.boolean()
    },
    images: random.arrayElements(),
    maxAdults: datatype.number()
  },
  isOfferDataLoading: false,
  offers: [{
    id: datatype.uuid(),
    title: lorem.text(),
    type: 'Room',
    price: 10,
    previewImage: image.imageUrl(),
    city: cities[0],
    location: {
      latitude: datatype.float(),
      longitude: datatype.float(),
      zoom: datatype.number(),
    },
    isFavorite: true,
    isPremium: datatype.boolean(),
    rating: 2
  }],
  isOffersDataLoading: false,
  nearOffers: [{
    id: datatype.uuid(),
    title: lorem.text(),
    type: 'Room',
    price: 10,
    previewImage: image.imageUrl(),
    city: cities[0],
    location: {
      latitude: datatype.float(),
      longitude: datatype.float(),
      zoom: datatype.number(),
    },
    isFavorite: true,
    isPremium: datatype.boolean(),
    rating: 2
  }],
  isNearOffersDataLoading: false,
  favorites: [],
  isFavoritesDataLoading: false,
  offerSortType: OfferSortType.Popular
};

export const expectedOfferFavoritesState: TOfferState = {
  activeCity: cities[0],
  offer: {
    id: datatype.uuid(),
    title: company.companyName(),
    type: 'Room',
    price: datatype.number(),
    previewImage: image.imageUrl(),
    city: cities[datatype.number(5)],
    location:{
      latitude: datatype.float(),
      longitude: datatype.float(),
      zoom: datatype.number()
    },
    isFavorite: false,
    isPremium: datatype.boolean(),
    rating: datatype.number(5),
    description: datatype.string(),
    bedrooms: datatype.number(10),
    goods: random.arrayElements(),
    host: {
      name: name.firstName(),
      avatarUrl: image.imageUrl(),
      isPro: datatype.boolean()
    },
    images: random.arrayElements(),
    maxAdults: datatype.number()
  },
  isOfferDataLoading: false,
  offers: [{
    id: datatype.uuid(),
    title: lorem.text(),
    type: 'Room',
    price: 10,
    previewImage: image.imageUrl(),
    city: {
      name: company.companyName(),
      location: {
        latitude: datatype.float(),
        longitude: datatype.float(),
        zoom: datatype.number(),
      }
    },
    location: {
      latitude: datatype.float(),
      longitude: datatype.float(),
      zoom: datatype.number(),
    },
    isFavorite: true,
    isPremium: datatype.boolean(),
    rating: 2
  }],
  isOffersDataLoading: false,
  nearOffers: [],
  isNearOffersDataLoading: false,
  favorites: [{
    id: datatype.uuid(),
    title: lorem.text(),
    type: 'Room',
    price: 10,
    previewImage: image.imageUrl(),
    city: {
      name: company.companyName(),
      location: {
        latitude: datatype.float(),
        longitude: datatype.float(),
        zoom: datatype.number(),
      }
    },
    location: {
      latitude: datatype.float(),
      longitude: datatype.float(),
      zoom: datatype.number(),
    },
    isFavorite: false,
    isPremium: datatype.boolean(),
    rating: 2
  }],
  isFavoritesDataLoading: false,
  offerSortType: OfferSortType.Popular
};

export const expectedUserData = {
  name: name.firstName(),
  avatarUrl: image.imageUrl(),
  isPro: datatype.boolean(),
  email: internet.email(),
  token: internet.password()
};

export const makeFakeStore = (initialState?: Partial<TState>): TState => ({
  User: {
    authorizationStatus: AuthorizationStatus.NoAuth,
    user: null
  },
  Offer: {
    isOfferDataLoading: false, offers: [],
    activeCity: {
      name: '',
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 0
      }
    },
    offer: null,
    isOffersDataLoading: false,
    nearOffers: [],
    isNearOffersDataLoading: false,
    favorites: [],
    isFavoritesDataLoading: false,
    offerSortType: OfferSortType.Popular
  },
  Review: {
    reviews: [],
    addReviewStatus: 'none',
    isFetchReviewsLoading: false
  },
  ...initialState ?? {},
});

export const expectedReview: TReviewFull = {
  id: '',
  date: new Date().toISOString(),
  comment: 'review text',
  rating: 1,
  offerId: datatype.uuid(),
  user: {
    name: '',
    avatarUrl: '',
    isPro: false
  }
};
