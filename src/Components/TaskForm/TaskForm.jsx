import { useState, useEffect } from "react";
import { Heading, Input, Select, Required } from "../";
import { taskData } from "../../Services/Apis";
import "./TaskForm.css";

import formik from "./Formik";

const TaskForm = () => {
  const [data, setData] = useState({});

  const { handleChange, handleSubmit, values, errors } = formik();

  useEffect(() => {
    taskData().then((res) => {
      setData(res.result);
    });
  }, []);

  return (
    <form className="task-form-container" onSubmit={handleSubmit}>
      <Heading content="Crear tarea" level={3} />
      <p>Crea tus tareas</p>
      <div className="task-form-inputs">
        <div>
          <Input
            type="text"
            name="title"
            placeholder="Título"
            value={values.title}
            change={handleChange}
          />
          <Required message={errors.title} />
        </div>
        <div>
          <Select
            id="status"
            change={handleChange}
            data={data?.status && ["Seleccionar un estado", ...data?.status]}
          />
          <Required message={errors.status} />
        </div>
        <div>
          <Select
            id="importance"
            change={handleChange}
            data={
              data?.importance && [
                "Seleccionar una prioridad",
                ...data?.importance,
              ]
            }
          />
          <Required message={errors.importance} />
        </div>
        <textarea
          placeholder="Descripción"
          onChange={handleChange}
          name="description"
        />
        <div>
          <Required message={errors.description} />
        </div>
      </div>
      <div className="task-form-submit-container">
        <Input type="submit" className="submit" value="Crear" />
      </div>
    </form>
  );
};

export default TaskForm;
