export const updateApplication = (jobID, newData) => (dispatch, getState) => {
  const token = localStorage.getItem('token');
  const headers = {
    'Authorization': `JWT ${token}`,
    'Content-Type': 'application/json',
  }
  console.log(jobID, newData);
  const body = JSON.stringify(newData);
  console.log(body);
  const method = 'POST';
  const myInit = {
    headers,
    body,
    method
  }
  return fetch(`http://localhost:8000/backend/api/jobs/job/${jobID}/`, myInit)
  .then(response => {
    // TODO error handling
    console.log(response);
  })
}