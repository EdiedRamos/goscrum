import { Heading, TaskCardText } from "../";
import "./TaskCard.css";

const TaskCard = (props) => {
  return (
    <div className="task-card">
      <div className="header-card-container">
        <Heading content={props.title} level={4} />
        <button>x</button>
      </div>
      <p>{props.createAt}</p>
      <p>{props.user.userName}</p>
      <div className="state-priority-container">
        <p className="finished">{props.status}</p>
        <p className="medium">{props.importance}</p>
      </div>
      <TaskCardText content={props.description} />
    </div>
  );
};

export default TaskCard;
