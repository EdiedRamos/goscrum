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
          status_css={"new"}
        />
        <TaskList
          status="En proceso"
          data={tasks.filter((task) => task.status === "IN PROGRESS")}
          status_css={"in-progress"}
        />
        <TaskList
          status="Finalizadas"
          data={tasks.filter((task) => task.status === "FINISHED")}
          status_css={"finished"}
        />
      </div>
    </div>
  );
};

export default Tasks;
