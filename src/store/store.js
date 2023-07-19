import { compose, legacy_createStore as createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [
  process.env.REACT_APP_REDUX_LOGGER_ENABLED === 'enabled' && logger,
  sagaMiddleware
].filter(Boolean);

const composeEnhancers = compose(applyMiddleware(...middlewares));
export const store = createStore(persistedReducer, undefined, composeEnhancers);
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
