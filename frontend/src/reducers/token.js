import { USER_LOGIN } from '../constants';

export const token = (state='', action) => {
  switch (action.type) {
    case USER_LOGIN:
      return action.payload;
    default:
      return state;
  }
}