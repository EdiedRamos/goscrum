import { Heading, TaskCard } from "../";
import "./TaskList.css";

const TaskList = (props) => {
  return (
    <div className="task-list-container">
      <Heading content={props.status} level={3} />
      {props?.data?.map((task) => (
        <TaskCard key={task._id} {...task} status_css={props.status_css} />
      ))}
    </div>
  );
};

export default TaskList;
