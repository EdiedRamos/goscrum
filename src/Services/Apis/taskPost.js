const taskPost = (task) => {
  return fetch(`${process.env.REACT_APP_BASE_API}/task`, {
    method: "POST",
    body: JSON.stringify(task),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((result) => result.json());
};

export default taskPost;
