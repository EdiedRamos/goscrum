import { useEffect, useState } from "react";
import { Select } from "../";
import { taskData } from "../../Services/Apis";

const TaskPriority = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    taskData().then((res) =>
      setData(["Seleccionar una prioridad", ...res.result.importance])
    );
  }, []);

  return <Select data={data} />;
};

export default TaskPriority;
