import {
  ADD_TASK,
  REMOVE_TASK,
  SET_ALL_TASKS,
  SEARCH_BY_OWNER,
} from "../Constants/tasksConstants";

const initialState = {
  backup: [],
  list: [],
  total: 0,
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_TASKS:
      return {
        backup: action.payload.allTasks,
        list: action.payload.allTasks,
        total: action.payload.allTasks.length,
      };
    case ADD_TASK:
      return {
        backup: state.backup,
        list: [...state.list, action.payload.task],
        total: state.total + 1,
      };
    case REMOVE_TASK:
      return {
        backup: state.backup,
        list: state.list.filter((task) => task._id !== action.payload.taskId),
        total: state.total - 1,
      };
    case SEARCH_BY_OWNER:
      const { userId } = action.payload;
      const list = !userId
        ? state.backup
        : state.backup.filter((task) => task.user.userId == userId);
      return {
        backup: state.backup,
        list,
        total: list.length,
      };

    default:
      return state;
  }
};

export default tasksReducer;
