import {
  ADD_TASK,
  REMOVE_TASK,
  SET_ALL_TASKS,
} from "../Constants/tasksConstants";

const initialState = {
  list: [],
  total: 0,
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_TASKS:
      return {
        list: [...state.list, ...action.payload.allTasks],
        total: action.payload.allTasks.length,
      };
    case ADD_TASK:
      return {
        list: [...state.list, action.payload.task],
        total: state.total + 1,
      };
    case REMOVE_TASK:
      return {
        list: state.list.filter((task) => task._id !== action.payload.taskId),
        total: state.total - 1,
      };
    default:
      return state;
  }
};

export default tasksReducer;
