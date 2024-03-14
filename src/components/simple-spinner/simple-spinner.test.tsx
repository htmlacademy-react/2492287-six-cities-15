import { render, screen } from '@testing-library/react';
import { SimpleSpinner } from '.';
describe('Component: SimpleSpinner', () => {
  it('should render correctly', () => {
    const simpleSpinnerTestId = 'simple-spinner';
    render(<SimpleSpinner/>);
    const simpleSpinner = screen.getByTestId(simpleSpinnerTestId);
    expect(simpleSpinner).toBeInTheDocument();
  });
});
