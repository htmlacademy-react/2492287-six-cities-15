import { lorem, datatype, company, image } from 'faker';
import { TErrorLoginDetail } from '../const';
import { TOffer } from '../../const';

export const errors: TErrorLoginDetail[] = [
  {
    property: lorem.word(),
    value: lorem.word(),
    messages: ['login', ' email']
  },
  {
    property: lorem.word(),
    value: lorem.word(),
    messages: [' password', ' number']
  }
];

export const offers: TOffer[] = [
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
