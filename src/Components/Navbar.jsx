import React, { useContext } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import { DarkModeContext } from "../Context/DarkModeContext";
import pic1 from "../assets/pic1.jpeg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);

  return (
    <div className="  flex justify-between items-center p-2 px-5 sticky top-0 dark:bg-gray-800 dark:text-gray-200 z-50">
      <div className="left flex justify-center items-center gap-8 ">
        <div className=" relative">
          <span className=" font-bold text-2xl text-blue-600 dark:text-blue-100 sm:text-xl">
            sipalingsocial
            <span className="absolute top-4 right-0 text-xl sm:text-base sm:top-3">
              media
            </span>
          </span>
        </div>
        <Link to={`../`}>
          <HomeOutlinedIcon />
        </Link>
        {darkMode ? (
          <WbSunnyOutlinedIcon
            onClick={toggle}
            className=" cursor-pointer transition-all duration-500"
          />
        ) : (
          <ModeNightOutlinedIcon
            onClick={toggle}
            className=" cursor-pointer transition-all duration-500"
          />
        )}
        <div className=" sm:hidden md:hidden">
          <GridViewOutlinedIcon />
        </div>
        <div className="search flex justify-center items-center gap-3 border rounded-md p-1 border-blue-200 bg-white dark:bg-transparent">
          <SearchOutlinedIcon />
          <input
            type="text"
            placeholder="Search .."
            className=" border-none bg-transparent w-[800px] sm:hidden md:hidden"
          />
        </div>
      </div>
      <div className="right flex justify-center items-center gap-8 ">
        <Link to={`../profile/1001`}>
          <Person2OutlinedIcon />
        </Link>
        <div className=" relative sm:hidden md:hidden">
          <div className="online bg-lime-500 w-2 h-2 rounded-xl absolute top-0 right-0" />
          <MailOutlineOutlinedIcon />
        </div>
        <div className=" relative sm:hidden md:hidden">
          <div className="online bg-lime-500 w-2 h-2 rounded-xl absolute top-0 right-0" />
          <NotificationsActiveOutlinedIcon />
        </div>
        <div className="userInfo flex justify-center items-center gap-2 sm:hidden md:hidden">
          <img className=" w-8 h-8 rounded-full" src={pic1} alt="" />
          <span className="font-medium">Rize Enf</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
