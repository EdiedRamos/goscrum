import "./Logout.css";

import { useDispatch } from "react-redux";
import { logoutAction } from "../../Services/Store/Actions/sesionActions";

const Logout = () => {
  const dispatch = useDispatch();
  return (
    <button className="logout" onClick={() => dispatch(logoutAction())}>
      X
    </button>
  );
};

export default Logout;
