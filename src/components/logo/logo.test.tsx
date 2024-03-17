import { render, screen } from '@testing-library/react';
import { Logo } from '.';
import { withHistory } from '../../utils/mock-component';
describe('Component: Logo', () => {
  it('should render correctly', () => {
    const logoLinkTestId = 'logo-link';
    const preparedComponent = withHistory(<Logo logoLocation='Header'/>);
    render(preparedComponent);
    const logoLink = screen.getByTestId(logoLinkTestId);
    expect(logoLink).toBeInTheDocument();
  });
});
