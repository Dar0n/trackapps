import { USER_LOGIN } from '../constants';

const currentToken = localStorage.getItem('token');

export const token = (state=currentToken, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return action.payload;
    default:
      return state;
  }
}