import { render, screen } from '@testing-library/react';
import { cities } from '../../const';
import { withHistory, withStore } from '../../utils/mock-component';
import { CityCard } from '.';
import { makeFakeStore } from '../../utils/mocks';
describe('Component: CityCard', () => {
  it('should render correctly', () => {
    const cityCardTestId = 'city-card';
    const withHistoryComponent = withHistory(<CityCard city={cities[0]} offers={[]} />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    render(withStoreComponent);
    const cityCard = screen.getByTestId(cityCardTestId);
    expect(cityCard).toBeInTheDocument();
  });
});
