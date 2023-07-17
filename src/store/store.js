import { compose, legacy_createStore as createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

const middleware = [logger];

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const createStoreWithParams =
  process.env.REACT_APP_REDUX_LOGGER_ENABLED === 'enabled'
    ? createStore(persistedReducer, undefined, compose(applyMiddleware(...middleware)))
    : createStore(persistedReducer, undefined);
export const store = createStoreWithParams;
export const persistor = persistStore(store);
