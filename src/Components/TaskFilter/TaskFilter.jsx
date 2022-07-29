import { Label, Input } from "../";
import "./TaskFilter.css";

const TaskFilter = () => {
  return (
    <div className="task-filter-container">
      <Input type="radio" name="radio-group" id="todas" checked={true} />
      <Label content="Todas" htmlFor="todas" />
      <Input type="radio" name="radio-group" id="mis-tareas" />
      <Label content="Mis tareas" htmlFor="mis-tareas" />
    </div>
  );
};

export default TaskFilter;
