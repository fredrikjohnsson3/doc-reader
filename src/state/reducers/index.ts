import { combineReducers } from '@reduxjs/toolkit';
import submitsReducer from './submitsreducer';
import { mindeeApi } from '../services/mindeeapi';

const rootReducer = combineReducers({
    submits: submitsReducer,
    [mindeeApi.reducerPath]: mindeeApi.reducer,
});

export default rootReducer;
