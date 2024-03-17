import { getBookmarkClass } from '.';

describe('Function: getBookmarkClass', () => {
  it('should return " offer__bookmark-button--active"', () => {
    const result = getBookmarkClass(true, 'offer');
    expect(result).toBe(' offer__bookmark-button--active');
  });
});
