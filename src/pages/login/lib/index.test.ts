import { randomInt } from '.';

describe('Function: randomInt', () => {
  it('should return true', () => {
    const min = 0;
    const max = 500;
    const result = randomInt(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });
});
