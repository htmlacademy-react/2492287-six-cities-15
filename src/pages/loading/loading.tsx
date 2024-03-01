import { FC } from 'react';
import { Spinner } from '../../components/Spinner';
import { APP_TITLE } from '../../const';

export const Loading: FC = () => (
  <div style={{margin: 20}}>
    <Spinner text={`${APP_TITLE} data is loading...`}/>
  </div>
);
