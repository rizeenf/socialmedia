import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";

const Navbar = () => {
  const changeTheme = () => {
    if (theme != "dark") {
      setTheme("dark");
    } else {
      setTheme("");
    }
  };

  return (
    <div className="  flex justify-between items-center p-2 px-5 sticky top-0 dark:bg-gray-800 dark:text-gray-200">
      <div className="left flex justify-center items-center gap-8 ">
        <span className=" font-bold text-2xl text-blue-600 dark:text-blue-300">
          sipalingsocial
        </span>
        <HomeOutlinedIcon />
        <ModeNightOutlinedIcon
          className=" cursor-pointer"
          onclick={changeTheme}
        />
        <GridViewOutlinedIcon />
        <div className="search flex justify-center items-center gap-3 border rounded-md p-1 border-blue-200 bg-white dark:bg-transparent">
          <SearchOutlinedIcon />
          <input
            type="text"
            placeholder="Search .."
            className=" border-none bg-transparent w-[800px]"
          />
        </div>
      </div>
      <div className="right flex justify-center items-center gap-8">
        <Person2OutlinedIcon />
        <MailOutlineOutlinedIcon />
        <NotificationsActiveOutlinedIcon />
        <div className="userInfo flex justify-center items-center gap-2">
          <img
            className=" w-8 h-8 rounded-full"
            src="https://images.pexels.com/photos/15955854/pexels-photo-15955854.jpeg"
            alt=""
          />
          <span className="font-medium">Rize Enf</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
