import { getClassName, getIsLoginPath } from '.';
import { internet, random } from 'faker';

describe('Function: getClassName', () => {
  it('should return page page-gray page--login', () => {
    const path = '/login';
    const result = getClassName(path, 0);
    expect(result).toBe('page page-gray page--login');
  });
  it('should return page page--main page-gray', () => {
    const path = '/';
    const result = getClassName(path, 0);
    expect(result).toBe('page page--main page-gray');
  });
  it('should return page page--main page-gray', () => {
    const path = '/';
    const result = getClassName(path, 1);
    expect(result).toBe('page page--main page-gray');
  });
  it('should return empty row', () => {
    const path = internet.url();
    const result = getClassName(path, 0);
    expect(result).toBe('page');
  });
});

describe('Function: getIsLoginPath', () => {
  it('should return true', () => {
    const path = '/login';
    const result = getIsLoginPath(path);
    expect(result).toBeTruthy();
  });
  it('should return false', () => {
    const path = random.word();
    const result = getIsLoginPath(path);
    expect(result).toBeFalsy();
  });
});
