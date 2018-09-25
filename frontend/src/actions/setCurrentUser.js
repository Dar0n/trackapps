import { setTokensToLocalStorage } from '../helpers/setTokensToLocalStorage';
import { SET_TOKEN } from '../constants';

export const setCurrentUser = (state) => (dispatch, getState) => {
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
  // Next clause should not happen due to 'required' flag on both input fields
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
      }
    })
}

const setToken = ({token}) => {
  return {
    type: SET_TOKEN,
    payload: token,
  }
}