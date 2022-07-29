import { Heading } from "../";
import "./TaskCard.css";

const TaskCard = (props) => {
  return (
    <div className="task-card">
      <div className="header-card-container">
        <Heading content={props.title} level={4} />
        <button>x</button>
      </div>
      <p>{props.time}</p>
      <p>{props.author}</p>
      <div className="state-priority-container">
        <Heading content={props.state} level={5} />
        <Heading content={props.priority} level={5} />
      </div>
      <p>{props.content}</p>
    </div>
  );
};

export default TaskCard;
