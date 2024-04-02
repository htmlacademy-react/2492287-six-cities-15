import { FC } from 'react';
import { Spinner } from '../../components/spinner';
import { APP_TITLE } from '../../const';
import './style/index.css';

const MainLoadingSettings = {
  text: `${APP_TITLE} is loading...`,

};

export const Loading: FC = () => (
  <div className='loading'>
    <Spinner text={MainLoadingSettings.text}/>
  </div>
);
