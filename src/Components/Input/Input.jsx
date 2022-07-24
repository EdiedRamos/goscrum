import "./Input.css";

const Input = (props) => {
  return (
    <input
      className={`input ${props.className}`}
      id={props.name}
      type={props.type || "text"}
      name={props.name}
      value={props.value}
      onChange={props.change}
    />
  );
};

export default Input;
