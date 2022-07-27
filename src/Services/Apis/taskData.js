const taskData = () => {
  return fetch(`${process.env.REACT_APP_BASE_API}/task/data`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((response) => response.json());
};

export default taskData;
