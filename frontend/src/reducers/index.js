import { combineReducers } from 'redux';
import { token } from './token';
import { applications } from './applications';

const appReducer = combineReducers({
  token,
  applications,
})

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
}

export default rootReducer;