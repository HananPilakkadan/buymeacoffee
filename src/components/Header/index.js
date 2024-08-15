import React from "react";
import Style from "./Header.module.scss";
import { assets } from "../../assets/assets";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import Hamburger from "../Hamburger";
const Header = ({ admin }) => {
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
  return (
    <header className={Style.header}>
      <div className={Style.header_right_container}>
        <div className={Style.header_right_container_logo}>
          <Link to="/">
            <img src={assets?.Logo} alt="Logo" />
          </Link>
        </div>
        <ul className={Style.header_right_container_nav}>
          {menu?.map((item, i) => (
            <li className="mx-2" key={i}>
              <Link to={item?.link}>{item?.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      {!admin ? (
        <div className={Style.header_left_container}>
          <div className={Style.header_left_container_search}>
            <IoSearch />
            <input type="text" placeholder="Search Creators" />
          </div>
          <button className={Style.header_left_container_btn}>Sign in</button>
          <button className={Style.header_left_container_btn_active}>
            Sign Up
          </button>
          <Hamburger />
        </div>
      ) : (
        <div className={Style.admin}>
          <span>Admin</span>
          <div className={Style.avatar}>
            <img src={assets?.user} alt="Admin" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
