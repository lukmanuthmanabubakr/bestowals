import React, { useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import "./navbarMainHome.css";
import { NavLink } from "react-router-dom";
import CustomButton from "../CustomButton";
import { useStateContext } from "../../context";
import { RiMailCheckLine } from "react-icons/ri";
import { TbWorldDollar } from "react-icons/tb";
import { RiEqualizerFill } from "react-icons/ri";
import { MdGroups2 } from "react-icons/md";
import { AiFillFund } from "react-icons/ai";
import "./navbarMainHome.css";

const NavbarMainHome = ({ switchTheme }) => {
  const { connect, address } = useStateContext();
  // const [myTheme, setMyTheme] = useLocalStorage("theme" ? "dark" : "light");
  const [active, setActive] = useState("bestowal-Features");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");

  const navToggle = () => {
    active === "bestowal-Features"
      ? setActive("bestowal-Features nav_active")
      : setActive("bestowal-Features");

    //Toggler Icon

    toggleIcon === "nav_toggler"
      ? setToggleIcon("nav_toggler toggle")
      : setToggleIcon("nav_toggler");
  };

  // const switchTheme = () => {
  //   const newTheme = myTheme === "light" ? "dark" : "light";
  //   setMyTheme(newTheme);
  // };

  return (
    <nav className="bestowal_navbar">
      <div className="bestowal_logo">
        <article className="bestowals-logo">
          <NavLink to="/">
            {" "}
            <span>b</span> estowal
          </NavLink>
        </article>
        <article className={active}>
          <NavLink to="/about">
            <span>
              <TbWorldDollar />
            </span>
            About
          </NavLink>
          <NavLink to="/features">
            {" "}
            <span>
              <RiEqualizerFill />
            </span>{" "}
            Features
          </NavLink>
          <NavLink to="/possibility">
            {" "}
            <span>
              <MdGroups2 />
            </span>{" "}
            Possibility
          </NavLink>
          <NavLink to="/blog">
            {" "}
            <span>
              <AiFillFund />
            </span>{" "}
            Library
          </NavLink>
          <NavLink to="/contact">
            {" "}
            <span>
              <RiMailCheckLine />
            </span>{" "}
            Contact
          </NavLink>

          <div className="themeModeMedia">
            {switchTheme === "light" ? (
              <MdOutlineWbSunny
                className="sunIcon"
                onClick={switchTheme}
                size={25}
              />
            ) : (
              <FaRegMoon className="sunIcon" onClick={switchTheme} size={25} />
            )}
            <div className="myCustomContainer">
              <CustomButton
                // btnType="button"
                title={address ? "Create a campaign" : "Connect"}
                styles={address ? "orange" : ""}
                handleClick={() => {
                  if (address) navigate("create-campaign");
                  else connect();
                }}
              />
            </div>
          </div>
        </article>
      </div>
      <div className="themeMode">
        {switchTheme === "light" ? (
          <MdOutlineWbSunny
            className="sunIcon"
            onClick={switchTheme}
            size={25}
          />
        ) : (
          <FaRegMoon className="sunIcon" onClick={switchTheme} size={25} />
        )}
        <div className="myCustomContainer">
          <CustomButton
            // btnType="button"
            title={address ? "Create a campaign" : "Connect"}
            styles={address ? "orange" : ""}
            handleClick={() => {
              if (address) navigate("create-campaign");
              else connect();
            }}
          />
        </div>
      </div>

      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default NavbarMainHome;
