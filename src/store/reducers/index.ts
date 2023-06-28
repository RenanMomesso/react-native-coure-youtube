import { combineReducers } from 'redux';
import userReducer from './userReducer';
import uiReducer from './uiReducer';
import quizzReducer from './quizzReducer';

export default combineReducers({
  user: userReducer,
  uiReducer: uiReducer,
  quizzReducer: quizzReducer,
});
