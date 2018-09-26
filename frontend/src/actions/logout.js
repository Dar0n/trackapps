import { USER_LOGOUT } from '../constants';

export const logout = () => (dispatch) => {
  localStorage.clear();
  const logoutAction = {
    type: USER_LOGOUT,
  }
  dispatch(logoutAction);
}