// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false, // ❌ thunk disabled, saga only
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/FLUSH',
          'persist/PAUSE',
          'persist/PURGE',
          'persist/REGISTER',
        ],
      },
    }).concat(sagaMiddleware),
  devTools: import.meta.env.DEV, // optional but correct
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
