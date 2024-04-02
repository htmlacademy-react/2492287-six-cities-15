import { render, screen } from '@testing-library/react';
import { cities } from '../../const';
import { CityLink } from '.';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks';
describe('Component: CityLink', () => {
  it('should render correctly', () => {
    const cityLinkTestId = 'city-link';
    const withHistoryComponent = withHistory(<CityLink city={cities[2]} isActive={false}/>);

    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    render(withStoreComponent);

    const cityLink = screen.getByTestId(cityLinkTestId);
    expect(cityLink).toBeInTheDocument();
  });
});
