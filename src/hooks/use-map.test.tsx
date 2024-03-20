import { render, renderHook } from '@testing-library/react';
import useMap from './use-map';
import { cities } from '../const';
import {MutableRefObject, createRef} from 'react';

describe('Hook: useMap', () => {
  it('should return null', () => {
    const { result } = renderHook(() => useMap(null as unknown as MutableRefObject<null>, cities[0]));
    expect(result.current).toBe(null);
  });
  it('should return null', () => {
    const ref = createRef<HTMLDivElement>();
    render(<div ref={ref} />);
    renderHook(() => useMap(ref, cities[0]));

    expect(ref.current).not.toBeNull();
  });

});
