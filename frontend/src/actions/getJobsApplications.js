import { GET_APPLICATIONS } from '../constants';

export const getJobsApplications = () => (dispatch, getState) => {
  const headers = {
    'Content-Type': 'application/json', 
  }
  const method = 'GET';
  const myInit = {
    method,
    headers,
  }
  return fetch('http://localhost:8000/backend/api/jobs/listjobs/', myInit)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return undefined;
    })
    .then(data => {
      if (data) {
        // console.log(data);
        const action = {
          type: GET_APPLICATIONS,
          payload: data,
        }
        dispatch(action);
      }
    })
}