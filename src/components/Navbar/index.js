import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { auth } from "../../Fire/Fire";
import Login from "../../pages/Login";
import { Logo, Logo1, Logout, Menu, Profile, Setting, Spec } from "../assets";
import { navigationLinks } from "./dummy";

const Navbar = () => {
  const [selected, setSelected] = useState(null);
  // const location = useLocation();
  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        return <Login />;
      })
      .catch((err) => console.log(err));
  };
  const { pathname } = useLocation();
  return (
    <>
      <div className="display_navbar relative mb-[35px] mt-[60px]">
        <div className="fixed" style={{ position: "fixed" }}>
          <div className=" color_bg w-[97px] h-[970px] rounded-[30px] py-[37px] px-[23px] ">
            <div className="bg-transparent">
              <NavLink to="/">
                <img
                  src={Logo1}
                  className="bg-transparent h-[50px] w-[50px] mb-[62px]"
                  alt="Logo"
                />
              </NavLink>
              {navigationLinks.map((item, index) => {
                const isActive = pathname === item.link;

                return (
                  <NavLink
                    to={item.link}
                    key={item.link}
                    onClick={() => setSelected(isActive ? null : index)}
                  >
                    <div
                      className={`hover:bg-[#000000]
                      rounded-[7px] cursor-pointer w-[47px] h-[47px] 
                      xl:w-auto xl:h-auto xl:py-3 xl:px-4 mb-[31px] ${
                        selected === index || isActive ? "bg-[#7A7A7A]" : ""
                      }`}
                    >
                      <img
                        src={item.icon}
                        alt={item.description}
                        className="bg-transparent"
                      />
                    </div>
                  </NavLink>
                );
              })}
              <div className="w-[51px] h-[1px] bg-[#858585] mb-[250px]" />

              <div className="flex justify-center bg-transparent">
                <img
                  src={Profile}
                  alt="profile"
                  className="w-[40px] h-[40px] rounded-full mb-[69px] items-center"
                />
              </div>

              <div className="w-[51px] h-[1px] bg-[#858585] mb-[67px]" />
              <div
                onClick={signOutHandler}
                className="hoverAnimation bg-transparent"
              >
                <img src={Logout} alt="log-out" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar mobile">
        <NavLink to="/">
          <img
            src={Logo1}
            className="bg-transparent h-[30px] w-[30px]"
            alt="Logo"
          />
        </NavLink>
        {navigationLinks.map((item, index) => {
          const isActive = pathname === item.link;

          return (
            <NavLink
              to={item.link}
              key={item.link}
              onClick={() => setSelected(isActive ? null : index)}
            >
              <div
                className={`${
                  selected === index || isActive
                    ? "bg-[#7A7A7A] p-[7px] rounded-[7px]"
                    : ""
                }`}
              >
                <img src={item.icon} alt={item.description} className="" />
              </div>
            </NavLink>
          );
        })}
        <NavLink to="/profile">
          <div className="flex justify-center bg-transparent">
            <img
              src={Profile}
              alt="profile"
              className="w-[30px] h-[30px] rounded-full items-center"
            />
          </div>
        </NavLink>
        <div onClick={signOutHandler} className="">
          <img src={Logout} alt="log-out" className="" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
