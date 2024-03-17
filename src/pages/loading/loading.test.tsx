import { render, screen } from '@testing-library/react';
import { Loading } from '.';
describe('Component: Loading', () => {
  it('should render correctly', () => {
    const expectedText = '6 cities data is loading...';
    render(<Loading/>);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
