import "./UserName.css";

const reduceName = (name) => {
  return name.split(" ")[0].substring(0, 10);
};

const UserName = () => {
  return (
    <p className="user-name">{reduceName(localStorage.getItem("userName"))}</p>
  );
};

export default UserName;
