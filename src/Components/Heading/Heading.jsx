import "./Heading.css";

const getHeader = (content = "heading", level = 1) => {
  switch (level) {
    case 1:
      return <h1>{content}</h1>;
    case 2:
      return <h2>{content}</h2>;
    case 3:
      return <h3>{content}</h3>;
    case 4:
      return <h4>{content}</h4>;
    case 5:
      return <h5>{content}</h5>;
    default:
      return <h6>{content}</h6>;
  }
};

const Heading = (props) => getHeader(props.content, props.level);

export default Heading;
