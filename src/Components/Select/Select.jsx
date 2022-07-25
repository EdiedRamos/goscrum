import "./Select.css";

const Select = (props) => {
  return (
    <select
      className="select"
      id={props.id}
      onChange={props.change}
      value={props.value}
    >
      {props?.data?.map((value) => (
        <option key={value}>{value}</option>
      ))}
    </select>
  );
};

export default Select;
