import React from "react";
import { Link } from "react-router-dom";
import PeopleAltTwoToneIcon from "@mui/icons-material/PeopleAltTwoTone";
import Groups3TwoToneIcon from "@mui/icons-material/Groups3TwoTone";
import StorefrontTwoToneIcon from "@mui/icons-material/StorefrontTwoTone";
import SubscriptionsTwoToneIcon from "@mui/icons-material/SubscriptionsTwoTone";
import UpdateTwoToneIcon from "@mui/icons-material/UpdateTwoTone";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import SportsEsportsTwoToneIcon from "@mui/icons-material/SportsEsportsTwoTone";
import CollectionsTwoToneIcon from "@mui/icons-material/CollectionsTwoTone";
import VideocamTwoToneIcon from "@mui/icons-material/VideocamTwoTone";
import CommentTwoToneIcon from "@mui/icons-material/CommentTwoTone";
import pic1 from "../assets/pic1.jpeg";

const Leftbar = () => {
  return (
    <div
      style={{ flex: 2 }}
      className="px-4 dark:bg-gray-800 dark:text-gray-200 sm:hidden md:hidden"
    >
      <div className="container flex flex-col justify-center gap-5 py-3 sticky top-14">
        <div className="userInfo flex items-center item">
          <img className=" w-7 h-7 rounded-full" src={pic1} alt="" />
          <span className=" font-medium">Rize Enf</span>
        </div>
        <div className="item">
          <PeopleAltTwoToneIcon className="text-blue-600 dark:text-blue-400" />
          <span>Friends</span>
        </div>
        <div className="item">
          <Groups3TwoToneIcon className="text-blue-600 dark:text-blue-400" />
          <span>Groups</span>
        </div>
        <div className="item">
          <StorefrontTwoToneIcon className="text-blue-600 dark:text-blue-400" />
          <span>Marketplace</span>
        </div>
        <div className="item">
          <SubscriptionsTwoToneIcon className="text-blue-600 dark:text-blue-400" />
          <span>Watch</span>
        </div>
        <div className="item">
          <UpdateTwoToneIcon className="text-blue-600 dark:text-blue-400" />
          <span>Memories</span>
        </div>
        <hr />
        <span className=" text-sm text-gray-500">Your shortcuts</span>
        <div className="item">
          <CalendarMonthTwoToneIcon className="text-blue-600 dark:text-blue-400" />
          <span>Events</span>
        </div>
        <div className="item">
          <SportsEsportsTwoToneIcon className="text-blue-600 dark:text-blue-400" />
          <span>Game</span>
        </div>
        <div className="item">
          <CollectionsTwoToneIcon className="text-blue-600 dark:text-blue-400" />
          <span>Gallery</span>
        </div>
        <div className="item">
          <VideocamTwoToneIcon className="text-blue-600 dark:text-blue-400" />
          <span>Videos</span>
        </div>
        <div className="item">
          <CommentTwoToneIcon className="text-blue-600 dark:text-blue-400" />
          <span>Messages</span>
        </div>
        <hr />
        <span className=" text-sm text-gray-500">Others</span>
        <Link to="../login">Logout</Link>
      </div>
    </div>
  );
};

export default Leftbar;
