import { Heading, TaskCard } from "../";
import "./TaskList.css";

const TaskList = (props) => {
  return (
    <div className="task-list-container">
      <Heading content={props.state} level={3} />
      {props?.data?.map((task) => (
        <TaskCard key={task._id} {...task} />
      ))}
    </div>
  );
};

export default TaskList;
