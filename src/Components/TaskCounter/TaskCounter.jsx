import "./TaskCounter.css";

const TaskCounter = (props) => {
  return <p className="task-counter">Tareas creadas: {props.quantity}</p>;
};

export default TaskCounter;
