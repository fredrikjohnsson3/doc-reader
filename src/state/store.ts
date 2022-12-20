import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { mindeeApi } from './services/mindeeapi';
import rootReducer from './reducers';

const store = configureStore({
    reducer: rootReducer,
    middleware: (gDM) => gDM().concat(mindeeApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export default store;
