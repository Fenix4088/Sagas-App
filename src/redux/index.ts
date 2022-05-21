import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../sagas';
import pathnameReducer from './reducers/pathname/index';
import peopleReducer from './reducers/people/index';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    pathnameReducer,
    peopleReducer
  },
  devTools: true,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type AppRootState = ReturnType<typeof store.getState>;
