import { LOGIN, LOGOUT } from "../Constants/sesionConstants";

const initialState = {
  loggedIn: localStorage.getItem("token") ? true : false,
};

const sesionReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("userName", action.payload.userName);
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("userId", action.payload.userId);

      return {
        loggedIn: true,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      localStorage.removeItem("userId");
      return {
        loggedIn: false,
      };
    default:
      return state;
  }
};

export default sesionReducer;
