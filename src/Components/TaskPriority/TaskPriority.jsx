import { useEffect, useState } from "react";
import { Select } from "../";
import { taskData } from "../../Services/Apis";

import { useDispatch } from "react-redux";
import {
  setImportance,
  search,
} from "../../Services/Store/Actions/tasksActions";

const TaskPriority = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    taskData().then((res) =>
      setData(["Seleccionar una prioridad", ...res.result.importance])
    );
  }, []);

  return (
    <Select
      data={data}
      change={(evt) => {
        dispatch(setImportance(evt.target.value));
        dispatch(search());
      }}
    />
  );
};

export default TaskPriority;
