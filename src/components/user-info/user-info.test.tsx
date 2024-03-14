import { render, screen } from '@testing-library/react';
import { UserInfo } from '.';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks';
describe('Component: UserInfo', () => {
  it('should render correctly', () => {
    const userInfoTestId = 'user-info';
    const withHistoryComponent = withHistory(<UserInfo user={null} location='/'/>);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    render(withStoreComponent);

    const userInfo = screen.getByTestId(userInfoTestId);
    expect(userInfo).toBeInTheDocument();
  });
});
