import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { Main } from '.';
import { makeFakeStore } from '../../utils/mocks';
describe('Component: Main', () => {
  it('should render correctly', () => {
    const mainTestId = 'main';
    const withHistoryComponent = withHistory(<Main/>);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    render(withStoreComponent);
    const main = screen.getByTestId(mainTestId);
    expect(main).toBeInTheDocument();
  });
});
