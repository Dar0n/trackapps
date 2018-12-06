export const getSingleJobApplication = (jobID) => async (dispatch, getState) => {
  const method = 'GET';
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json', 
    'Authorization': `JWT ${token}`,
  }
  const myInit = {
    method,
    headers,
  }
  const response = await fetch(`http://localhost:8000/backend/api/jobs/job/${jobID}`, myInit);
  const json = await response.json();
  console.log(json);
  return json;
    // .then(response => {
    //   if (response.ok) {
    //     return response.json();
    //   }
    //   return undefined;
    // })
    // .then(data => {
    //   if (data) {
    //     console.log(data);
    //     return data;
    //   }
    //   return ;
    // })
}