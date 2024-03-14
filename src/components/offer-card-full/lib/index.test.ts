import { getAdultsText, getBedroomsText } from '.';

describe('Function: getBedroomsText', () => {
  it('should return "10 Bedrooms"', () => {
    const bedrooms = 10;
    const result = getBedroomsText(bedrooms);
    expect(result).toBe('10 Bedrooms');
  });
  it('should return "1 Bedroom"', () => {
    const bedrooms = 1;
    const result = getBedroomsText(bedrooms);
    expect(result).toBe('1 Bedroom');
  });
});

describe('Function: getAdultsText', () => {
  it('should return "Max 10 adults"', () => {
    const adults = 10;
    const result = getAdultsText(adults);
    expect(result).toBe('Max 10 adults');
  });
  it('should return "Max 1 adult"', () => {
    const adults = 1;
    const result = getAdultsText(adults);
    expect(result).toBe('Max 1 adult');
  });
});
