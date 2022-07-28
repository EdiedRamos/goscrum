import { TaskCard } from "../";
import "./TaskList.css";

const TaskList = (props) => {
  return (
    <div className="task-list-container">
      <p>{props.state}</p>
      {props?.data?.map((task) => (
        <TaskCard key={task._id} {...task} />
      ))}
    </div>
  );
};

export default TaskList;
