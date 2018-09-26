import { GET_APPLICATIONS } from '../constants';

export const applications = (state=[], action) => {
  switch (action.type) {
    case GET_APPLICATIONS:
      return action.payload.map(application => application);
    default:
      return state;
  }
}