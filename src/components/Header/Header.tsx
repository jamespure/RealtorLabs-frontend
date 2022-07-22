import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./headerStyles.module.css";
import DesktopNav from "./Nav/DesktopNav/DesktopNav";
import MobileNav from "./Nav/MobileNav/MobileNav";

const Header: FC = () => {
  return (
    <header className={classes.header}>
      <DesktopNav />
      <MobileNav />
    </header>
  );
};

export default Header;
