import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import weatherReducer from './reducers';

const composeEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(weatherReducer, composeEnhancer);

export default store;
