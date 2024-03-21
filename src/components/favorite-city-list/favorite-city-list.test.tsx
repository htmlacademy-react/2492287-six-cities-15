import { render, screen } from '@testing-library/react';
import { FavoriteCityList } from '.';
import { expectedOffers, makeFakeStore } from '../../utils/mocks';
import { withHistory, withStore } from '../../utils/mock-component';
describe('Component: FavoriteCityList', () => {
  it('should render correctly', () => {
    const expectedText = 'Nothing yet saved.';
    render(<FavoriteCityList offers={[]}/>);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
  it('should render correctly', () => {
    const withHistoryComponent = withHistory(<FavoriteCityList offers={expectedOffers}/>);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    render(withStoreComponent);

    expect(screen.getByText(/saved /i)).toBeInTheDocument();
  });
});
