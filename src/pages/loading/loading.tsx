import { FC } from 'react';
import { Spinner } from '../../components/spinner';
import { MainLoadingSettings } from './const';

export const Loading: FC = () => (
  <div style={MainLoadingSettings.style}>
    <Spinner text={MainLoadingSettings.text}/>
  </div>
);
