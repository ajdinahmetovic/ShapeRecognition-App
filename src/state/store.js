import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {persistStore} from 'redux-persist';
import persistedReducer from './reducers';

const store = createStore(
  persistedReducer,
  compose(applyMiddleware(thunkMiddleware)),
);

const persistor = persistStore(store);
// Exports
export {store, persistor};
