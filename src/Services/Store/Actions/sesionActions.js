import { LOGIN, LOGOUT } from "../Constants/sesionConstants";

export const loginAction = (token, userName, userId) => {
  return {
    type: LOGIN,
    payload: {
      token,
      userName,
      userId,
    },
  };
};

export const logoutAction = () => {
  return {
    type: LOGOUT,
    payload: null,
  };
};
