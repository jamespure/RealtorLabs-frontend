import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./headerStyles.module.css";
import DesktopNav from "./Nav/DesktopNav/DesktopNav";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  console.log(isOpen);

  return (
    <header className={classes.header}>
      <DesktopNav />
    </header>
  );
};

export default Header;
