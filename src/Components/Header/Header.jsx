import { Logo, Donate, TaskCounter, UserName, Logout } from "../";

const Header = () => {
  return (
    <>
      <Logo />
      <Donate />
      <TaskCounter quantity={3} />
      <UserName />
      <Logout />
    </>
  );
};

export default Header;
