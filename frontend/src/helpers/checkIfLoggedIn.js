export const checkIfLoggedIn = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return false;
  }
  else {
    const body = JSON.stringify({token});
    const method = "POST";
    const headers = {
      'Content-Type': 'application/json',
    }
    const myInit = {
      body,
      headers,
      method,
    };
    return fetch('http://localhost:8000/backend/api/auth/token/verify/', myInit)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return undefined;
      })
      .then(data => {
        if (data && data.token) {
          return true;
        }
        return false;
      })
  }
}