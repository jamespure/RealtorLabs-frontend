import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import classes from "../../headerStyles.module.css";

const MobileNav: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className={`${classes.mobileNav} flex py-8 w-11/12`}>
      <div className="grow text-center">
        <h1>REALTORLABS</h1>
      </div>
      <div className={`${classes.menu} ${isOpen ? `${classes.active}` : ""}`}>
        {["Home", "Buy", "Rent", "About"].map((item) => (
          <Link key={item} to={`/${item}`}>
            {item}
          </Link>
        ))}
      </div>
      <div
        className={`${classes.menuToggler} ${
          isOpen ? `${classes.active}` : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
      </div>
    </nav>
  );
};

export default MobileNav;
