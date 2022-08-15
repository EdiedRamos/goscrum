import { LOGIN, LOGOUT } from "../Constants/sesionConstants";

const initialState = {
  loggedIn: localStorage.getItem("token") ? true : false,
};

const sesionReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("token", action.payload.token);
      return {
        loggedIn: true,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        loggedIn: false,
      };
    default:
      return state;
  }
};

export default sesionReducer;
