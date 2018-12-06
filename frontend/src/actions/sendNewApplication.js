export const sendNewApplication = (data) => (dispatch, getState) => {
  // console.log(data);
  const token = localStorage.getItem('token');
  // console.log(token);
  const body = JSON.stringify(data);
  // console.log(body);
  const headers = {
    'Authorization': `JWT ${token}`,
    'Content-Type': 'application/json',
  }
  const method = "POST";
  const myInit = {
    body,
    headers,
    method,
  }
  // !TODO add error handling in case something goes wrong
  return fetch('http://localhost:8000/backend/api/jobs/newjob/', myInit)
    .then(response => {
      // console.log(response);
      if (response.ok) {
        return response.json();
      }
      return undefined;
    })
    .then(data => {
      if (data) {
        console.log(data);
      }
    })
}