const authData = () => {
  return fetch(`${process.env.REACT_APP_BASE_API}/auth/data`)
    .then((response) => response.json())
    .then((data) => data.result);
};

export default authData;
