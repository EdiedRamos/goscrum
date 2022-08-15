import { Heading, TaskCardText } from "../";
import "./TaskCard.css";

import { useDispatch } from "react-redux";
import { removeTask } from "../../Services/Store/Actions/tasksActions";

const TaskCard = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="task-card">
      <div className="header-card-container">
        <Heading content={props.title} level={4} />
        <button onClick={() => dispatch(removeTask(props._id))}>x</button>
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
