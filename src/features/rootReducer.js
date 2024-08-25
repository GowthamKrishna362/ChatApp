import { combineReducers } from 'redux';
import chatReducer from './chatSlice.js';

const rootReducer = combineReducers({
  chatReducer: chatReducer,
});

export default rootReducer;
