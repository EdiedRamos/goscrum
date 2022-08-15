import { useState, useEffect } from "react";
import { Label, Input } from "../";
import "./TaskFilter.css";

import { useDispatch } from "react-redux";
import { searchByOwner } from "../../Services/Store/Actions/tasksActions";

const TaskFilter = () => {
  const [allTasks, setAllTasks] = useState(true);
  const dispatch = useDispatch();
  const handleChange = () => {
    setAllTasks((prev) => !prev);
  };
  useEffect(() => {
    dispatch(searchByOwner(!allTasks ? localStorage.getItem("userId") : false));
  }, [allTasks]);
  return (
    <div className="task-filter-container">
      <Input
        type="radio"
        name="radio-group"
        id="todas"
        checked={allTasks}
        change={handleChange}
      />
      <Label content="Todas" htmlFor="todas" />
      <Input
        type="radio"
        name="radio-group"
        id="mis-tareas"
        change={handleChange}
      />
      <Label content="Mis tareas" htmlFor="mis-tareas" />
    </div>
  );
};

export default TaskFilter;
