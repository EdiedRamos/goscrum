import { Heading } from "../";
import "./TaskCard.css";

const TaskCard = (props) => {
  return (
    <div className="task-card">
      <Heading content={props.title} level={4} />
      <p>{props.time}</p>
      <p>{props.author}</p>
      <p>{props.state}</p>
      <p>{props.priority}</p>
      <p>{props.content}</p>
    </div>
  );
};

export default TaskCard;
