import { useState } from "react";
import "./TaskCardText.css";

const reduceLength = (text = "") => {
  return text.length > 70 ? text.substring(0, 67).concat("...") : text;
};

const TaskCardText = ({ content }) => {
  const [textState, setTextState] = useState({
    isLarge: content.length > 70 ? true : false,
    seeMore: true,
  });

  const [text, setText] = useState(reduceLength(content));

  return (
    <>
      <p className="task-card-text">{text}</p>
      {textState.isLarge && (
        <button
          className="see-more"
          onClick={() => {
            setText(textState.seeMore ? content : reduceLength(content));
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
    </>
  );
};

export default TaskCardText;
