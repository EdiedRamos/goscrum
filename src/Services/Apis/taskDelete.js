const taskDelete = (taskId) => {
  return fetch(`${process.env.REACT_APP_BASE_API}/task/${taskId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/jsoin",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((result) => result.json());
};

export default taskDelete;
