import "./Required.css";

const Required = ({ message }) => {
  return <>{message ? <p className="required">{message}</p> : null}</>;
};

export default Required;
