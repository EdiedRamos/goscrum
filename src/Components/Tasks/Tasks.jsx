import { useSelector } from "react-redux";

import { Heading, TaskFilter, TaskSearch, TaskPriority, TaskList } from "../";
import "./Tasks.css";

const Tasks = () => {
  const tasks = useSelector((store) => store.tasksReducer);

  return (
    <div className="tasks-container">
      <Heading content="Mis tareas" level={3} />
      <div className="task-options-container">
        <TaskFilter />
        <TaskSearch />
        <TaskPriority />
      </div>
      <div className="task-group-container">
        <TaskList
          status="Nuevas"
          data={tasks.filter((task) => task.status === "NEW")}
        />
        <TaskList
          status="En proceso"
          data={tasks.filter((task) => task.status === "IN PROGRESS")}
        />
        <TaskList
          status="Finalizadas"
          data={tasks.filter((task) => task.status === "FINISHED")}
        />
      </div>
    </div>
  );
};

export default Tasks;
