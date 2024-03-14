import { render, screen } from '@testing-library/react';
import { cities } from '../../const';
import { CityLinkList } from '.';
import { withHistory } from '../../utils/mock-component';
describe('Component: CityLinkList', () => {
  it('should render correctly', () => {
    const cityLinkContainerTestId = 'city-link-container';
    const cityLinkItemTestId = 'city-link-item';
    const preparedComponent = withHistory(<CityLinkList activeCity={cities[2]}/>);
    render(preparedComponent);
    const cityLinkContainer = screen.getByTestId(cityLinkContainerTestId);
    const cityLinkItems = screen.getAllByTestId(cityLinkItemTestId);
    expect(cityLinkContainer).toBeInTheDocument();
    expect(cityLinkItems.length).toBe(6);
  });
});
