import {createStore, applyMiddleware} from 'redux';
import createthunkmiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CombineR from './Reducers';

const loggerMiddleware = createLogger();
const ThunkMiddleware = createthunkmiddleware;
const rootReducers = CombineR;
const middleware = [ThunkMiddleware];

middleware.push(loggerMiddleware);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};
const persistedReducer = persistReducer(persistConfig, rootReducers);
const createStoreWithMiddleware = applyMiddleware(...middleware);
export const store = createStore(persistedReducer, createStoreWithMiddleware);
export const persister = persistStore(store);
