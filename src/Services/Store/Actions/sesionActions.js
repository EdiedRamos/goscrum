import { LOGIN, LOGOUT } from "../Constants/sesionConstants";

export const loginAction = (token) => {
  return {
    type: LOGIN,
    payload: {
      token,
    },
  };
};

export const logoutAction = () => {
  return {
    type: LOGOUT,
    payload: null,
  };
};
