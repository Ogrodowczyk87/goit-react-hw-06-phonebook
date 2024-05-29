import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contact',
  storage,
  blacklist: ['filter'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// redux-persist provides different storage to persist data like local 
// storage, session storage or async storge. We will use the local storage.
// We need the combineReducers function to group up all the reducers 
// into one so that we can pass it to the redux-persist.redux-persist 
// dispatches some functions and according to official redux-toolkit 
// guide we need to add those to the ignore list to avoid unnecessary 
// warnings or errors.

export const persistor = persistStore(store);
