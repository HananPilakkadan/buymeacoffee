import React, { useState } from "react";
import Style from "./Hamburger.module.scss";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

const Hamburger = () => {
  const [isActive, setIsActive] = useState(false);
  const menu = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Features",
      link: "/features",
    },
    {
      name: "Explore Creators",
      link: "/explore-creators",
    },
    {
      name: "FAQ",
      link: "/faq",
    },
  ];

  const handleHamburger = () => {
    setIsActive(!isActive);
  };
  return (
    <div className={`${Style.Hamburger} ${isActive ? Style.active : ""}`}>
      <div className={Style.icon} onClick={handleHamburger}>
        <span></span>
        <span></span>
      </div>
      <div className={`${Style.Menu} ${isActive && Style.menuActive}`}>
        <ul>
          {menu?.map((item, i) => (
            <li key={i}>
              <Link to={item?.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
        {window.innerWidth <= 650 && (
          <>
            <div className={Style.header_left_container_search}>
              <IoSearch />
              <input type="text" placeholder="Search Creators" />
            </div>
            <button className={Style.header_left_container_btn}>Sign in</button>
            <button className={Style.header_left_container_btn_active}>
              Sign Up
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Hamburger;
