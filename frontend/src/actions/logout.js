import { USER_LOGOUT } from '../constants';

export const logout = (push) => (dispatch) => {
  localStorage.clear();
  const logoutAction = {
    type: USER_LOGOUT,
  }
  dispatch(logoutAction);
  push('/login');
}