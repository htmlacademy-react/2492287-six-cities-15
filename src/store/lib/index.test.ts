import { lorem } from 'faker';
import { concatErrors, setOfferFavorite, sortOffers } from '.';
import { OfferSortType, TOffers } from '../../const';
import { errors, offers } from './mocks';

describe('Function: concatErrors', () => {
  it('should return "login\r\n email\r\n password\r\n number\r\n"', () => {
    const result = concatErrors(errors);
    expect(result).toBe('login\r\n email\r\n password\r\n number\r\n');
  });
  it('should return empty text', () => {
    const result = concatErrors([]);
    expect(result).toBe('');
  });
  it('should return "login\r\n email\r\n password\r\n number\r\n"', () => {
    const result = concatErrors(errors);
    expect(result).toBe('login\r\n email\r\n password\r\n number\r\n');
  });
});

describe('Function: sortOffers', () => {
  it('should return same offers', () => {
    const result = sortOffers(OfferSortType.Popular, offers);
    expect(result).toBe(offers);
  });
  it('should return sorted by price high to low', () => {
    const result = sortOffers(OfferSortType.PriceHighLow, offers);
    expect(result[0]?.price).toBe(14);
    expect(result[1]?.price).toBe(12);
    expect(result[2]?.price).toBe(10);
  });
  it('should return sorted by price low to high', () => {
    const result = sortOffers(OfferSortType.PriceLowHigh, offers);
    expect(result[0]?.price).toBe(10);
    expect(result[1]?.price).toBe(12);
    expect(result[2]?.price).toBe(14);
  });
  it('should return sorted by rating', () => {
    const result = sortOffers(OfferSortType.TopRated, offers);
    expect(result[0]?.rating).toBe(5);
    expect(result[1]?.rating).toBe(2);
    expect(result[2]?.rating).toBe(1);
  });
});

describe('Function: sortOffers', () => {
  it('should not set isFavorite', () => {
    const data = Array.from(offers);
    setOfferFavorite(data, lorem.word(), true);
    expect(data[0].isFavorite).toBeFalsy();
    expect(data[1].isFavorite).toBeFalsy();
    expect(data[2].isFavorite).toBeFalsy();
  });
  it('should set isFavorite', () => {
    const data = [...offers];
    setOfferFavorite(data, data[1].id, true);
    expect(data[1].isFavorite).toBeTruthy();
  });
  it('should not set isFavorite', () => {
    const data: TOffers = [];
    setOfferFavorite(data, lorem.word(), true);
    expect(data.length).toBe(0);
  });
});
