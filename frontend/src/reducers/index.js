import { combineReducers } from 'redux';
import { token } from './token';

const appReducer = combineReducers({
  token,
})

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
}

export default rootReducer;