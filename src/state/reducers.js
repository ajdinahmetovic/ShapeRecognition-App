import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import auth from './reducers/auth';

const rootReducer = combineReducers({
  auth,
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // Add reducer to list to make it persistent
  whitelist: ['auth'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;
