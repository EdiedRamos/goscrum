import { Label, Input } from "../";
import "./TaskFilter.css";

import { useDispatch } from "react-redux";
import { setOwner, search } from "../../Services/Store/Actions/tasksActions";
import { useSelector } from "react-redux";

const TaskFilter = () => {
  const dispatch = useDispatch();
  const owner = useSelector((store) => store.tasksReducer.owner);
  return (
    <div className="task-filter-container">
      <Input
        type="radio"
        name="radio-group"
        id="todas"
        checked={owner === "all"}
        change={() => {
          dispatch(setOwner("all"));
          dispatch(search());
        }}
      />
      <Label content="Todas" htmlFor="todas" />
      <Input
        type="radio"
        name="radio-group"
        id="mis-tareas"
        change={() => {
          dispatch(setOwner("me"));
          dispatch(search());
        }}
      />
      <Label content="Mis tareas" htmlFor="mis-tareas" />
    </div>
  );
};

export default TaskFilter;
