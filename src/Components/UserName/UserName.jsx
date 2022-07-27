const reduceName = (name) => {
  return name.split(" ")[0].substring(0, 10);
};

const UserName = () => {
  return <p>{reduceName("Edied Isaías Ramos Hernández")}</p>;
};

export default UserName;
