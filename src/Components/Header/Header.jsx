import { useState } from "react";
import { Logo, Donate, TaskCounter, UserName, Logout } from "../";
import "./Header.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <div className="left">
        <Logo />
      </div>
      <button className="toggle" onClick={() => setToggle(!toggle)}>
        Menú
      </button>
      <div className={`right ${toggle && "invisible"}`}>
        <Donate />
        <TaskCounter quantity={3} />
        <UserName />
        <Logout />
      </div>
    </header>
  );
};

export default Header;
