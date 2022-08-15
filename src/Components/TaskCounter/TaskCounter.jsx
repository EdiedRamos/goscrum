import "./TaskCounter.css";
import { useSelector } from "react-redux";

const TaskCounter = () => {
  const total = useSelector((store) => store.tasksReducer.total);
  return <p className="task-counter">Tareas creadas: {total}</p>;
};

export default TaskCounter;
