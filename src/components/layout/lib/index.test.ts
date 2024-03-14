import { getClassName, getIsLoginPath } from '.';
import { internet, random } from 'faker';

describe('Function: getClassName', () => {
  it('should return page--gray page--login', () => {
    const path = '/login';
    const result = getClassName(path);
    expect(result).toBe('page--gray page--login');
  });
  it('should return page--gray page--main', () => {
    const path = '/';
    const result = getClassName(path);
    expect(result).toBe('page--gray page--main');
  });
  it('should return empty row', () => {
    const path = internet.url();
    const result = getClassName(path);
    expect(result).toBe('');
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
