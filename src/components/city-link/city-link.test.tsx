import { render, screen } from '@testing-library/react';
import { cities } from '../../const';
import { CityLink } from '.';
import { withHistory } from '../../utils/mock-component';
describe('Component: CityLink', () => {
  it('should render correctly', () => {
    const cityLinkTestId = 'city-link';
    const preparedComponent = withHistory(<CityLink city={cities[2]} isActive={false}/>);
    render(preparedComponent);

    const cityLink = screen.getByTestId(cityLinkTestId);
    expect(cityLink).toBeInTheDocument();
  });
});
