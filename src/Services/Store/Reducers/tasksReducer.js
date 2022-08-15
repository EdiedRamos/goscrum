import {
  ADD_TASK,
  REMOVE_TASK,
  SET_ALL_TASKS,
} from "../Constants/tasksConstants";

const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case SET_ALL_TASKS:
      return [...state, ...action.payload.allTasks];
    case ADD_TASK:
      return [...state, action.payload.task];
    default:
      return state;
  }
};

export default tasksReducer;
