const authRegister = (data) => {
  return fetch(`${process.env.REACT_APP_BASE_API}/auth/register`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export default authRegister;
