import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { greetingReducer } from './Greetings';
/* eslint-disable no-underscore-dangle */
const reducer = combineReducers({
  greetingReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
