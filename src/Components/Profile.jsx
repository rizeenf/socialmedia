import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MailIcon from "@mui/icons-material/Mail";
import Posts from "./Posts";

const Profile = () => {
  const { currUser } = useContext(AuthContext);
  return (
    <div className="dark:bg-gray-700 dark:text-gray-100  min-h-full scroll-smooth ">
      <div className="cover relative w-full h-full">
        <img
          src="https://images.pexels.com/photos/15639587/pexels-photo-15639587/free-photo-of-black-and-white-photo-of-torre-latinoamericana-in-mexico-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className=" w-full h-80  object-cover"
        />
        <img
          src={currUser.profilePic}
          alt=""
          className=" w-40 h-40 rounded-full object-cover absolute left-0 right-0 m-auto top-60"
        />
      </div>
      <div className="p-8 pt-4 sm:p-3 md:p-5">
        <div className=" w-full h-56 profile rounded-md items dark:bg-gray-800 flex flex-row justify-between items-center sm:flex-col md:flex-col sm:mt-16 md:mt-16">
          <div className="link flex gap-3 pl-5 flex-1 mt-5 ">
            <a href="https://github.com/rizeenf" target="_blank">
              <GitHubIcon />
            </a>
            <a href="https://github.com/rizeenf" target="_blank">
              <LinkedInIcon />
            </a>
            <a href="https://github.com/rizeenf" target="_blank">
              <TwitterIcon />
            </a>
            <a href="https://github.com/rizeenf" target="_blank">
              <InstagramIcon />
            </a>
            <a href="https://github.com/rizeenf" target="_blank">
              <FacebookIcon />
            </a>
          </div>
          <div className="desc flex flex-col flex-1 items-center gap-1 ">
            <span className=" font-bold text-2xl mt-10 sm:mt-1 md:mt-1">
              {currUser.name}
            </span>
            <div className="flex flex-row justify-around gap-2">
              <div className="loc flex flex-row gap-1">
                <LocationOnIcon fontSize="small" />
                <span className=" text-sm">Bekasi, Jawa barat</span>
              </div>
              <div className="web flex flex-row gap-1">
                <LanguageIcon fontSize="small" />
                <span className=" text-sm">rizeenf.github.io</span>
              </div>
            </div>
            <button className=" mt-2 rounded-md bg-blue-500 dark:bg-blue-500 text-white p-2">
              Follow
            </button>
          </div>
          <div className="more flex flex-1 gap-5 justify-end items-center mt-5 sm:mt-1 sm:mr-0 md:mt-1 md:mr-0 mr-5">
            <MailIcon />
            <MoreHorizIcon />
          </div>
        </div>
        <div className="post mt-5">
          <Posts />
        </div>
      </div>
    </div>
  );
};

export default Profile;
