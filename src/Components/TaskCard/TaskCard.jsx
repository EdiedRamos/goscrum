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
        <p className="finished">{props.state}</p>
        <p className="medium">{props.priority}</p>
      </div>
      <p>{props.content}</p>
      <button className="see-more active">Ver más</button>
    </div>
  );
};

export default TaskCard;
