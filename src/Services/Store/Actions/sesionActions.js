import { LOGIN, LOGOUT } from "../Constants/sesionConstants";

export const loginAction = (token, userName) => {
  return {
    type: LOGIN,
    payload: {
      token,
      userName,
    },
  };
};

export const logoutAction = () => {
  return {
    type: LOGOUT,
    payload: null,
  };
};
