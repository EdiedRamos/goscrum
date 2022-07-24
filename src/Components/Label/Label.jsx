import "./Label.css";

const Label = ({ content, htmlFor }) => {
  return <label htmlFor={htmlFor}>{content}</label>;
};

export default Label;
