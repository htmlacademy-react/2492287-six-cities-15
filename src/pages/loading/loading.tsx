import { FC } from 'react';
import { Spinner } from '../../components/spinner';
import { APP_TITLE } from '../../const';

const MainLoadingSettings = {
  text: `${APP_TITLE} is loading...`,
  style: {margin: 20}
};

export const Loading: FC = () => (
  <div style={MainLoadingSettings.style}>
    <Spinner text={MainLoadingSettings.text}/>
  </div>
);
