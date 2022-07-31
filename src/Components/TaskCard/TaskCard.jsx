import { useState } from "react";
import { Heading } from "../";
import "./TaskCard.css";

const reduceLength = (text = "") => {
  return text.length > 70 ? text.substring(0, 67).concat("...") : text;
};

const TaskCard = (props) => {
  const [textState, setTextState] = useState({
    isLarge: props?.content.length > 70 ? true : false,
    seeMore: true,
  });

  const [text, setText] = useState(reduceLength(props?.content));

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
      <p>{text}</p>
      {textState.isLarge && (
        <button
          className="see-more"
          onClick={() => {
            setText(
              textState.seeMore ? props?.content : reduceLength(props?.content)
            );
            setTextState(
              textState.seeMore
                ? { ...textState, seeMore: false }
                : { ...textState, seeMore: true }
            );
          }}
        >
          {textState.seeMore ? "Ver más" : "Ver menos"}
        </button>
      )}
    </div>
  );
};

export default TaskCard;
