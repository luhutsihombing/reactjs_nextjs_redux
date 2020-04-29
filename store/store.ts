import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistReducer} from 'redux-persist';
import Storage from 'redux-persist/lib/storage';
import {composeWithDevTools} from 'redux-devtools-extension';
import {PersistConfig} from 'redux-persist/es/types';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const bindMiddleware = (middleware: any[]) => {
  if (process.env.NODE_ENV !== 'production')
    return composeWithDevTools(applyMiddleware(...middleware));
  else return applyMiddleware(...middleware);
};

const persistConfig: PersistConfig<any> = {
  key: 'martfury',
  storage: Storage,
  whitelist: ['cart', 'compare', 'auth', 'wishlist']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(persistedReducer, initialState, bindMiddleware([sagaMiddleware]));

  // @ts-ignore
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
}

export default configureStore;
