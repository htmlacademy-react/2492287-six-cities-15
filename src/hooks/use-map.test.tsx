import { renderHook } from '@testing-library/react';
import useMap from './use-map';
import { cities } from '../const';
import {MutableRefObject} from 'react';

describe('Hook: useUserAnswers', () => {
  it('should return array with 2 elements', () => {
    const { result } = renderHook(() => useMap(null as unknown as MutableRefObject<null>, cities[0]));
    expect(result.current).toBe(null);
  });
});
