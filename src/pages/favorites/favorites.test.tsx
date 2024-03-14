import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { Favorites } from '.';
import { makeFakeStore } from '../../utils/mocks';
describe('Component: Favorites', () => {
  it('should render correctly', () => {
    const favoritesTestId = 'favorites';
    const withHistoryComponent = withHistory(<Favorites/>);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    render(withStoreComponent);
    const favorites = screen.getByTestId(favoritesTestId);
    expect(favorites).toBeInTheDocument();
  });
});
