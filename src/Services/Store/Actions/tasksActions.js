import {
  ADD_TASK,
  REMOVE_TASK,
  SET_ALL_TASKS,
} from "../Constants/tasksConstants";

import { taskPost, taskGet, taskDelete } from "../../Apis";

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

export const getAllTasks = () => {
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
