import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { Login } from '.';
import { makeFakeStore } from '../../utils/mocks';
describe('Component: Login', () => {
  it('should render correctly', () => {
    const loginTestId = 'login';
    const withHistoryComponent = withHistory(<Login/>);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    render(withStoreComponent);
    const login = screen.getByTestId(loginTestId);
    expect(login).toBeInTheDocument();
  });
});
