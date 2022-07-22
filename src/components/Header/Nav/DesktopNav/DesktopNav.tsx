import React, { FC } from "react";
import { Link } from "react-router-dom";
import classes from "../../headerStyles.module.css";

const DesktopNav: FC = () => {
  return (
    <nav
      className={`${classes.desktopNav} flex justify-between w-9/12 items-center py-8`}
    >
      <div className="w-[100px]">
        <ul className="flex justify-between">
          {["Home", "Buy"].map((links) => (
            <li>
              <Link to={`/${links === "Home" ? "" : links}`}>{links}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1>REALTORLABS</h1>
        <Link to="#">
          <span></span>
          <span></span>
          <span></span>
        </Link>
      </div>

      <div className="w-[100px]">
        <ul className="flex justify-between">
          {["Rent", "About"].map((links) => (
            <li>
              <Link to={`/${links}`}>{links}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default DesktopNav;
