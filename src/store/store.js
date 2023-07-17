import { compose, legacy_createStore as createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

const middleware = [process.env.REACT_APP_REDUX_LOGGER_ENABLED === 'enabled' && logger].filter(
  Boolean
);

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = compose(applyMiddleware(...middleware));
export const store = createStore(persistedReducer, undefined, composeEnhancers);
export const persistor = persistStore(store);
