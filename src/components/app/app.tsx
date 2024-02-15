import {JSX} from 'react';
import Main from '../../pages/main/main';

type AppProps = {
  offerCount: number;
}

function App({offerCount} :AppProps): JSX.Element {
  return (
    <Main offerCount={offerCount} />
  );
}

export default App;
