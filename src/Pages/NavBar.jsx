import { IoCloseOutline, IoMoon } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { navBarLink } from "../assets/Script/info";
import { MdOutlineWbSunny } from "react-icons/md";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { useTheme } from "../Components/Context/ThemeContext";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, setDarkMode } = useTheme();
  const location = useLocation();

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  const handelMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={` w-full fixed top-0 left-0 z-50 px-8  py-10 
             lg:px-17.5   flex justify-between items-center  max-h-28 
            transition-all duration-75   ease-in-out
            ${darkMode ? "bg-[#1b2431e2]" : "bg-white opacity-90 "}
     `}
    >
      <h2
        className={`font-semibold text-[24px] leading-[150%] font-poppins 
        ${darkMode ? "text-white" : "text-primaryColor"}`}
      >
        Abd
      </h2>
      <ul
        className={`
        transform transition-transform duration-300 ease-in-out absolute left-0
        flex flex-col mt-111 pb-1 justify-center items-center  gap-8 w-full
        ${darkMode ? "bg-[#1b2431e2]" : "bg-white "}
        ${menuOpen ? "translate-x-0 opacity-95 " : "-translate-x-[150%] opacity-0"}
            rounded-b-lg  text-center
         lg:flex-row lg:gap-6  lg:max-w-120 lg:mt-0  lg:translate-x-0 lg:opacity-100 lg:pb-0
         lg:bg-inherit lg:static
         `}
      >
        {navBarLink?.map((link, index) => {
          const isActive = location.hash === link.url.replace("/", "");
          return (
            <Link
              key={index}
              to={`/${link.url}`}
              className={` w-full  py-2 lg:py-0 font-Poppins text-[16px] 
                          font-semibold leading-[150%] hover:text-secondaryColor border-none
                          ${
                            darkMode
                              ? "hover:bg-primaryColor lg:hover:bg-inherit"
                              : "hover:bg-gray-200 lg:hover:bg-inherit "
                          }
                ${isActive ? "text-[#0C96E2]  " : ` ${darkMode ? "text-white" : "text-primaryColor"}`}`}
            >
              {link.content}
            </Link>
          );
        })}
      </ul>
      <div className="flex gap-7">
        <button className="cursor-pointer" onClick={toggleTheme}>
          {darkMode ? (
            <MdOutlineWbSunny className="w-7.5 h-7.5 text-white" />
          ) : (
            <IoMoon className="w-7.5 h-7.5  text-primaryColor" />
          )}
        </button>
        <button
          className={`cursor-pointer lg:hidden ${darkMode ? "text-white" : "text-primaryColor"}`}
          onClick={handelMenu}
        >
          {menuOpen ? (
            <IoCloseOutline className="w-7.5 h-7.5" />
          ) : (
            <FaBarsStaggered className="w-7.5 h-7.5" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
