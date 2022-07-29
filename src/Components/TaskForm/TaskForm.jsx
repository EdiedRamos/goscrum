import { useState, useEffect } from "react";
import { Heading, Input, Select } from "../";
import { taskData } from "../../Services/Apis";
import "./TaskForm.css";

const TaskForm = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    taskData().then((res) => {
      setData(res.result);
    });
  }, []);

  return (
    <div className="task-form-container">
      <Heading content="Crear tarea" level={3} />
      <p>Crea tus tareas</p>
      <div className="task-form-inputs">
        <Input type="text" name="title" placeholder="Título" />
        <Select
          data={data?.status && ["Seleccionar un estado", ...data?.status]}
        />
        <Select
          data={
            data?.importance && [
              "Seleccionar una prioridad",
              ...data?.importance,
            ]
          }
        />
        <textarea placeholder="Descripción" />
      </div>
      <div className="task-form-submit-container">
        <Input type="submit" className="submit" value="Crear" />
      </div>
    </div>
  );
};

export default TaskForm;
