import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./headerStyles.module.css";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  console.log(isOpen);

  return (
    <header className={classes.header}>
      <nav>
        <div
          className={`${classes.leftLinks} ${
            !isOpen === false ? `${classes.active}` : ""
          }`}
        >
          {["Home", "Buy"].map((links) => (
            <ul>
              <li>
                <Link to="#">{links}</Link>
              </li>
            </ul>
          ))}
        </div>
        <div className={classes.logo}>
          <h1>REALTORLABS</h1>
          <Link
            to="#"
            className={classes.hamburgerLines}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={classes.lines}></span>
            <span className={classes.lines}></span>
            <span className={classes.lines}></span>
          </Link>
        </div>

        <div
          className={`${classes.rightLinks} ${
            !isOpen === false ? `${classes.active}` : ""
          }`}
        >
          {["Rent", "About"].map((links) => (
            <ul>
              <li>
                <Link to="#">{links}</Link>
              </li>
            </ul>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
