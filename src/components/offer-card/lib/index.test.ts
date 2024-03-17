import { getCardClassName, getCardImageClassName,
  getCardImageSize, getCardInfoClassName, getOfferLinkById } from '.';
import { TOfferCardType } from '../const';

describe('Function getCardClassName', () => {
  it('should return cities__card', () => {
    const offerCardType: TOfferCardType = 'City';
    const result = getCardClassName(offerCardType);
    expect(result).toBe('cities__card');
  });
  it('should return favorites__card', () => {
    const offerCardType: TOfferCardType = 'Favorite';
    const result = getCardClassName(offerCardType);
    expect(result).toBe('favorites__card');
  });
  it('should return near-places__card', () => {
    const offerCardType: TOfferCardType = 'Near';
    const result = getCardClassName(offerCardType);
    expect(result).toBe('near-places__card');
  });
  it('should return empty text', () => {
    type TTemp = TOfferCardType | 'Temp';
    const offerCardType: TTemp = 'Temp';
    const result = getCardClassName(offerCardType as TOfferCardType);
    expect(result).toBe('');
  });
});

describe('Function getCardImageClassName', () => {
  it('should return cities__image', () => {
    const offerCardType: TOfferCardType = 'City';
    const result = getCardImageClassName(offerCardType);
    expect(result).toBe('cities__image');
  });
  it('should return favorites__image-wrapper', () => {
    const offerCardType: TOfferCardType = 'Favorite';
    const result = getCardImageClassName(offerCardType);
    expect(result).toBe('favorites__image-wrapper');
  });
  it('should return near-places__image-wrapper', () => {
    const offerCardType: TOfferCardType = 'Near';
    const result = getCardImageClassName(offerCardType);
    expect(result).toBe('near-places__image-wrapper');
  });
  it('should return empty text', () => {
    type TTemp = TOfferCardType | 'Temp';
    const offerCardType: TTemp = 'Temp';
    const result = getCardImageClassName(offerCardType as TOfferCardType);
    expect(result).toBe('');
  });
});

describe('Function getCardInfoClassName', () => {
  it('should return empty text', () => {
    const offerCardType: TOfferCardType = 'City';
    const result = getCardInfoClassName(offerCardType);
    expect(result).toBe('');
  });
  it('should return favorites__card-info', () => {
    const offerCardType: TOfferCardType = 'Favorite';
    const result = getCardInfoClassName(offerCardType);
    expect(result).toBe('favorites__card-info');
  });
  it('should return empty text', () => {
    const offerCardType: TOfferCardType = 'Near';
    const result = getCardInfoClassName(offerCardType);
    expect(result).toBe('');
  });
  it('should return empty text', () => {
    type TTemp = TOfferCardType | 'Temp';
    const offerCardType: TTemp = 'Temp';
    const result = getCardInfoClassName(offerCardType as TOfferCardType);
    expect(result).toBe('');
  });
});

describe('Function getCardImageSize', () => {
  it('should return {width: 260, height: 200}', () => {
    const offerCardType: TOfferCardType = 'City';
    const result = getCardImageSize(offerCardType);
    expect(result.height).toBe(200);
    expect(result.width).toBe(260);
  });
  it('should return {width: 150, height: 110}', () => {
    const offerCardType: TOfferCardType = 'Favorite';
    const result = getCardImageSize(offerCardType);
    expect(result.height).toBe(110);
    expect(result.width).toBe(150);
  });
  it('should return {width: 260, height: 200}', () => {
    const offerCardType: TOfferCardType = 'Near';
    const result = getCardImageSize(offerCardType);
    expect(result.height).toBe(200);
    expect(result.width).toBe(260);
  });
  it('should return {width: 260, height: 200}', () => {
    type TTemp = TOfferCardType | 'Temp';
    const offerCardType: TTemp = 'Temp';
    const result = getCardImageSize(offerCardType as TOfferCardType);
    expect(result.height).toBe(200);
    expect(result.width).toBe(260);
  });
});

describe('Function getOfferLinkById', () => {
  it('should return "/offer/"', () => {
    const offerId = '';
    const result = getOfferLinkById(offerId);
    expect(result).toBe('/offer/');
  });
  it('should return "/offer/test"', () => {
    const offerId = 'test';
    const result = getOfferLinkById(offerId);
    expect(result).toBe('/offer/test');
  });
});
