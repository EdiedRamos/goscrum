import "./TaskCounter.css";
import { useSelector } from "react-redux";

const TaskCounter = () => {
  const quantity = useSelector((store) => store.tasksReducer.total);
  return <p className="task-counter">Tareas creadas: {quantity}</p>;
};

export default TaskCounter;
