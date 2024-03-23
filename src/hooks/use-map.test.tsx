import { render, renderHook } from '@testing-library/react';
import useMap from './use-map';
import { cities } from '../const';
import {createRef} from 'react';

describe('Hook: useMap', () => {
  it('should return null', () => {
    const { result } = renderHook(() => useMap({current: null}, cities[0]));
    expect(result.current).toBe(null);
  });
  it('should return not null', () => {
    const ref = createRef<HTMLDivElement>();
    render(<div ref={ref} />);
    renderHook(() => useMap(ref, cities[0]));

    expect(ref.current).not.toBeNull();
  });

});
