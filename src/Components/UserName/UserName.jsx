import "./UserName.css";

const reduceName = (name) => {
  return name.split(" ")[0].substring(0, 10);
};

const UserName = () => {
  return (
    <p className="user-name">{reduceName("Edied Isaías Ramos Hernández")}</p>
  );
};

export default UserName;
