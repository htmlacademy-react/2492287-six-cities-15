import { render, screen } from '@testing-library/react';
import { cities } from '../../const';
import { CityLinkList } from '.';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks';
describe('Component: CityLinkList', () => {
  it('should render correctly', () => {
    const cityLinkContainerTestId = 'city-link-container';
    const cityLinkItemTestId = 'city-link-item';
    const withHistoryComponent = withHistory(<CityLinkList activeCity={cities[2]}/>);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    render(withStoreComponent);
    const cityLinkContainer = screen.getByTestId(cityLinkContainerTestId);
    const cityLinkItems = screen.getAllByTestId(cityLinkItemTestId);
    expect(cityLinkContainer).toBeInTheDocument();
    expect(cityLinkItems.length).toBe(6);
  });
});
