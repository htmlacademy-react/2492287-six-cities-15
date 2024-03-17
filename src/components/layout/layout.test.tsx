import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks';
import { Layout } from '.';
describe('Component: Layout', () => {
  it('should render correctly', () => {
    const layoutContainerTestId = 'layout-container';
    const withHistoryComponent = withHistory(<Layout/>);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    render(withStoreComponent);
    const layoutContainer = screen.getByTestId(layoutContainerTestId);
    expect(layoutContainer).toBeInTheDocument();
  });
});
