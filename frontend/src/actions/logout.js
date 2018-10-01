import { USER_LOGOUT } from '../constants';

export const logout = () => (dispatch) => {
  console.log('Cleaning local storage');
  localStorage.clear();
  const logoutAction = {
    type: USER_LOGOUT,
  }
  dispatch(logoutAction);
}