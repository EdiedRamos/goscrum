import "./Input.css";

const Input = (props) => {
  return (
    <input
      className={`input ${props.className}`}
      id={props.id ? props.id : props.name}
      type={props.type || "text"}
      name={props.name}
      value={props.value}
      onChange={props.change}
      placeholder={props.placeholder}
      checked={props.checked}
    />
  );
};

export default Input;
