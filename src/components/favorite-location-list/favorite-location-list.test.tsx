import { render, screen } from '@testing-library/react';
import { cities } from '../../const';
import { FavoriteLocationList } from '.';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks';
describe('Component: FavoriteLocationList', () => {
  it('should render correctly', () => {
    const favoriteLocationListTestId = 'favorite-location-list';
    const withHistoryComponent = withHistory(<FavoriteLocationList city={cities[0]} offers={[]}/>);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    render(withStoreComponent);
    const favoriteLocationList = screen.getByTestId(favoriteLocationListTestId);
    expect(favoriteLocationList).toBeInTheDocument();
  });
});
