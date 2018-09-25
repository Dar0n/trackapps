import { setTokensToLocalStorage } from '../helpers/setTokensToLocalStorage';
import { USER_LOGIN } from '../constants';

export const login = (state, push) => (dispatch, getState) => {
  // console.log(state);
  const method = 'POST';
  const body = JSON.stringify(state);
  const headers = {
    'Content-Type': 'application/json',
  }
  const myInit = {
    method,
    body,
    headers,
  }
  if (!state.username || !state.password) {
    return undefined;
  }
  return fetch('http://localhost:8000/backend/api/auth/token/', myInit)
    .then(response => {
      // console.log(response);
      if (response.ok) {
        return response.json();
      }
      return undefined;
    })
    .then(data => {
      if (data) {
        // console.log(data);
        setTokensToLocalStorage(data);
        dispatch(setToken(data));
        push('/');
      }
    })
}

const setToken = ({token}) => {
  return {
    type: USER_LOGIN,
    payload: token,
  }
}