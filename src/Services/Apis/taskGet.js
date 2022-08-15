const taskGet = () => {
  return fetch(`${process.env.REACT_APP_BASE_API}/task`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((response) => response.json());
};

export default taskGet;
