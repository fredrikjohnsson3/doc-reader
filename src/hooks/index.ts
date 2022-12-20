import { useSelector, useDispatch } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { RootState, AppDispatch, ActionCreators } from '../state';
import { useMemo } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const useActions = () => {
    const dispatch = useAppDispatch();

    return useMemo(() => {
        return bindActionCreators(ActionCreators, dispatch);
    }, [dispatch]);
};
