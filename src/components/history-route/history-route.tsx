import {useState, useLayoutEffect, PropsWithChildren, FC} from 'react';
import {Router} from 'react-router-dom';
import type {BrowserHistory} from 'history';

export type THistoryRouterProps = {
  history: BrowserHistory;
  basename?: string;
}

export const HistoryRouter: FC<PropsWithChildren<THistoryRouterProps>> = ({basename, history, children}) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
};
