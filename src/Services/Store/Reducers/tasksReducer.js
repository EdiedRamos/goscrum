import {
  ADD_TASK,
  REMOVE_TASK,
  SET_ALL_TASKS,
  SET_OWNER,
  SET_IMPORTANCE,
  SET_TITLE,
  SEARCH,
} from "../Constants/tasksConstants";

const initialState = {
  list: [],
  total: 0,
  owner: "all",
  title: "",
  importance: "",
  result: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_TASKS:
      return {
        ...state,
        list: action.payload.allTasks,
        result: action.payload.allTasks,
        total: action.payload.allTasks.length,
      };
    case ADD_TASK:
      return {
        ...state,
        list: [...state.list, action.payload.task],
        total: state.total + 1,
      };
    case REMOVE_TASK:
      return {
        ...state,
        list: state.list.filter((task) => task._id !== action.payload.taskId),
        total: state.total - 1,
      };
    case SET_OWNER:
      return {
        ...state,
        owner: action.payload.owner,
      };
    case SET_IMPORTANCE:
      return {
        ...state,
        importance: action.payload.importance,
      };
    case SET_TITLE:
      return {
        ...state,
        title: action.payload.title,
      };
    case SEARCH:
      let allTasks = state.list;
      // filtering by owner
      if (state.owner === "me") {
        const userId = localStorage.getItem("userId");
        allTasks = allTasks.filter((task) => task.user.userId === userId);
      }
      // filtering by title
      if (state.title.trim()) {
        allTasks = allTasks.filter((task) =>
          task.title.startsWith(state.title)
        );
      }
      // filtering by importance
      if (state.importance) {
        allTasks = allTasks.filter(
          (task) => task.importance === state.importance
        );
      }
      return {
        ...state,
        result: allTasks,
      };
    default:
      return state;
  }
};

export default tasksReducer;
