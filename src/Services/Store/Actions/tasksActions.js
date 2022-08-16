import {
  ADD_TASK,
  REMOVE_TASK,
  SET_ALL_TASKS,
  SET_OWNER,
  SET_TITLE,
  SET_IMPORTANCE,
  SEARCH,
} from "../Constants/tasksConstants";

import { taskPost, taskGet, taskDelete } from "../../Apis";

export const setAllTasks = () => {
  return (dispatch) => {
    taskGet().then((res) => {
      dispatch({
        type: SET_ALL_TASKS,
        payload: {
          allTasks: res.result,
        },
      });
    });
  };
};

export const addTask = (task) => {
  return (dispatch) => {
    taskPost(task).then((res) => {
      if (res.status_code === 200) {
        dispatch({
          type: ADD_TASK,
          payload: {
            task: res.result.task,
          },
        });
      }
    });
  };
};

export const removeTask = (taskId) => {
  return (dispatch) => {
    taskDelete(taskId).then((res) => {
      if (res.status_code === 200) {
        dispatch({
          type: REMOVE_TASK,
          payload: {
            taskId,
          },
        });
      }
    });
  };
};

export const setOwner = (owner) => {
  return {
    type: SET_OWNER,
    payload: {
      owner,
    },
  };
};

export const setTitle = (title) => {
  return {
    type: SET_TITLE,
    payload: {
      title,
    },
  };
};

export const setImportance = (importance) => {
  return {
    type: SET_IMPORTANCE,
    payload: {
      importance,
    },
  };
};

export const search = () => {
  return {
    type: SEARCH,
    payload: null,
  };
};
