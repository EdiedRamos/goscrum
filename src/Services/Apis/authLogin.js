const authLogin = (data) => {
  return fetch(`${process.env.REACT_APP_BASE_API}/auth/login`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export default authLogin;
