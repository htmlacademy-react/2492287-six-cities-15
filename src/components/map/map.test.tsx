import { render, screen } from '@testing-library/react';
import { Map } from '.';
import { cities } from '../../const';

describe('Component: Map', () => {
  it('should render correctly', () => {
    const preparedComponent = <Map city={cities[0]} points={[]} mapPositionType={'offer'}/>;

    render(preparedComponent);

    expect(screen.getByTestId('map'));
  });
});
