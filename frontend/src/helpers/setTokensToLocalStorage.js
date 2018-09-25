export const setTokensToLocalStorage = ({token}) => {
  // TODO: XSS attack is possible with local storage
  if (token) {
    localStorage.setItem('token', token);
  }
}