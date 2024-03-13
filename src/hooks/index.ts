import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import { TAppDispatch, TState } from '../store/const';

export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TState> = useSelector;
