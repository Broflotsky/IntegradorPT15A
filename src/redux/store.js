import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';
import thunkMiddleware from 'redux-thunk'

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose

const store = createStore(  
  rootReducer,
  composerEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;