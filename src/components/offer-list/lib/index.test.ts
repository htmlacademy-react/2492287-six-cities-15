import { getCardListClassName } from '.';
import { TOfferCardType } from '../../offer-card/const';

describe('Function getCardClassName', () => {
  it('should return "cities__places-list places__list tabs__content"', () => {
    const offerCardType: TOfferCardType = 'City';
    const result = getCardListClassName(offerCardType);
    expect(result).toBe('cities__places-list places__list tabs__content');
  });
  it('should return "favorites__places"', () => {
    const offerCardType: TOfferCardType = 'Favorite';
    const result = getCardListClassName(offerCardType);
    expect(result).toBe('favorites__places');
  });
  it('should return "near-places__list places__list"', () => {
    const offerCardType: TOfferCardType = 'Near';
    const result = getCardListClassName(offerCardType);
    expect(result).toBe('near-places__list places__list');
  });
  it('should return empty text', () => {
    type TTemp = TOfferCardType | 'Temp';
    const offerCardType: TTemp = 'Temp';
    const result = getCardListClassName(offerCardType as TOfferCardType);
    expect(result).toBe('');
  });
});
