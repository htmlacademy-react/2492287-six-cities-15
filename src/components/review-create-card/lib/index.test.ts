import {datatype} from 'faker';
import { validateSubmit } from '.';

describe('Function: validateSubmit', () => {
  it('should return true', () => {
    const value = new Array(datatype.number({min: 50, max: 300})).join('x');
    const rating = datatype.number({min: 1, max: 5});
    const result = validateSubmit(value, rating);
    expect(result).toBeTruthy();
  });
  it('should return false', () => {
    const value = new Array(datatype.number({min: 301})).join('x');
    const rating = datatype.number({min: 1, max: 5});
    const result = validateSubmit(value, rating);
    expect(result).toBeFalsy();
  });
  it('should return false', () => {
    const value = new Array(datatype.number(49)).join('x');
    const rating = datatype.number({min: 1, max: 5});
    const result = validateSubmit(value, rating);
    expect(result).toBeFalsy();
  });
  it('should return false', () => {
    const value = new Array(datatype.number({min: 50, max: 300})).join('x');
    const rating = 0;
    const result = validateSubmit(value, rating);
    expect(result).toBeFalsy();
  });
});
