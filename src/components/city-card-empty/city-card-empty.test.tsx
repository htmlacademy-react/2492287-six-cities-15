import { render, screen } from '@testing-library/react';
import { CityCardEmpty } from '.';
import { cities } from '../../const';
describe('Component: CityCardEmpty', () => {
  it('should render correctly', () => {
    const expectedText = 'No places to stay available';
    render(<CityCardEmpty city={cities[2]}/>);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
