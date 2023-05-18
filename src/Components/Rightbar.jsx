import React from "react";
import "./Rightbar.css";
import pic1 from "../assets/pic1.jpeg";
import pic2 from "../assets/pic2.jpeg";

const Rightbar = () => {
  return (
    <div style={{ flex: 3 }} className=" dark:bg-gray-700 dark:text-gray-200">
      <div className="container flex flex-col justify-center gap-5 p-3 sticky top-14 ">
        <div className="items dark:bg-gray-800 flex flex-col justify-center p-5 rounded-md">
          <span className=" text-gray-400 py-2">Sugestions for you</span>
          <div className="item flex flex-row justify-between py-2 ">
            <div className="userInfo flex flex-row gap-2 justify-center items-center">
              <img className=" w-6 h-6 rounded-xl" src={pic1} alt="" />
              <p>Rize Enf</p>
            </div>
            <div className="buttons text-sm flex flex-row justify-center items-center gap-2">
              <button className=" rounded-sm bg-blue-500 dark:bg-blue-300 text-white p-1">
                Follow
              </button>
              <button className=" rounded-sm bg-red-500 dark:bg-red-300 text-white p-1">
                Not now
              </button>
            </div>
          </div>
          <div className="item flex flex-row justify-between py-2 ">
            <div className="userInfo flex flex-row gap-2 justify-center items-center">
              <img className=" w-6 h-6 rounded-xl" src={pic1} alt="" />
              <p>Rize Enf</p>
            </div>
            <div className="buttons text-sm flex flex-row justify-center items-center gap-2">
              <button className=" rounded-sm bg-blue-500 dark:bg-blue-300 text-white p-1">
                Follow
              </button>
              <button className=" rounded-sm bg-red-500 dark:bg-red-300 text-white p-1">
                Not now
              </button>
            </div>
          </div>{" "}
          <div className="item flex flex-row justify-between py-2 ">
            <div className="userInfo flex flex-row gap-2 justify-center items-center">
              <img className=" w-6 h-6 rounded-xl" src={pic1} alt="" />
              <p>Rize Enf</p>
            </div>
            <div className="buttons text-sm flex flex-row justify-center items-center gap-2">
              <button className=" rounded-sm bg-blue-500 dark:bg-blue-300 text-white p-1">
                Follow
              </button>
              <button className=" rounded-sm bg-red-500 dark:bg-red-300 text-white p-1">
                Not now
              </button>
            </div>
          </div>{" "}
          <div className="item flex flex-row justify-between py-2 ">
            <div className="userInfo flex flex-row gap-2 justify-center items-center">
              <img className=" w-6 h-6 rounded-xl" src={pic1} alt="" />
              <p>Rize Enf</p>
            </div>
            <div className="buttons text-sm flex flex-row justify-center items-center gap-2">
              <button className=" rounded-sm bg-blue-500 dark:bg-blue-300 text-white p-1">
                Follow
              </button>
              <button className=" rounded-sm bg-red-500 dark:bg-red-300 text-white p-1">
                Not now
              </button>
            </div>
          </div>
        </div>
        <div className="items dark:bg-gray-800 flex flex-col justify-center p-5 rounded-md">
          <span className=" text-gray-400 py-2">Latest Activities</span>
          <div className="item flex flex-row justify-between py-2 ">
            <div className="userInfo flex flex-row gap-2 justify-center items-center">
              <img className=" w-6 h-6 rounded-xl" src={pic1} alt="" />
              <p>Rize Enf</p>
              <span className=" text-gray-700 font-light dark:text-gray-400">
                changed their profile picture
              </span>
            </div>
          </div>
          <div className="item flex flex-row justify-between py-2 ">
            <div className="userInfo flex flex-row gap-2 justify-center items-center">
              <img className=" w-6 h-6 rounded-xl" src={pic1} alt="" />
              <p>Rize Enf</p>
              <span className=" text-gray-700 font-light dark:text-gray-400">
                liked your post
              </span>
            </div>
          </div>
          <div className="item flex flex-row justify-between py-2 ">
            <div className="userInfo flex flex-row gap-2 justify-center items-center">
              <img className=" w-6 h-6 rounded-xl" src={pic1} alt="" />
              <p>Rize Enf</p>
              <span className=" text-gray-700 font-light dark:text-gray-400">
                comment on your post
              </span>
            </div>
          </div>
          <div className="item flex flex-row justify-between py-2 ">
            <div className="userInfo flex flex-row gap-2 justify-center items-center">
              <img className=" w-6 h-6 rounded-xl" src={pic1} alt="" />
              <p>Rize Enf</p>
              <span className=" text-gray-700 font-light dark:text-gray-400">
                comment on your post
              </span>
            </div>
          </div>
        </div>
        <div className="items dark:bg-gray-800 flex flex-col justify-center p-5 rounded-md">
          <span className=" text-gray-400 py-2">Online friends</span>
          <div className="item flex flex-row justify-between py-2 ">
            <div className="userInfo flex flex-row gap-2 justify-center items-center">
              <div className="relative">
                <img className=" w-6 h-6 rounded-xl" src={pic2} alt="" />
                <div className="online bg-lime-500 w-2 h-2 rounded-xl absolute top-0 right-0" />
              </div>
              <p>Rize Enf</p>
            </div>
          </div>
          <div className="item flex flex-row justify-between py-2 ">
            <div className="userInfo flex flex-row gap-2 justify-center items-center">
              <div className="relative">
                <img className=" w-6 h-6 rounded-xl" src={pic2} alt="" />
                <div className="online bg-lime-500 w-2 h-2 rounded-xl absolute top-0 right-0" />
              </div>
              <p>Rize Enf</p>
            </div>
          </div>
          <div className="item flex flex-row justify-between py-2 ">
            <div className="userInfo flex flex-row gap-2 justify-center items-center">
              <div className="relative">
                <img className=" w-6 h-6 rounded-xl" src={pic2} alt="" />
                <div className="online bg-lime-500 w-2 h-2 rounded-xl absolute top-0 right-0" />
              </div>
              <p>Rize Enf</p>
            </div>
          </div>
          <div className="item flex flex-row justify-between py-2 ">
            <div className="userInfo flex flex-row gap-2 justify-center items-center">
              <div className="relative">
                <img className=" w-6 h-6 rounded-xl" src={pic2} alt="" />
                <div className="online bg-lime-500 w-2 h-2 rounded-xl absolute top-0 right-0" />
              </div>
              <p>Rize Enf</p>
            </div>
          </div>
          <div className="item flex flex-row justify-between py-2 ">
            <div className="userInfo flex flex-row gap-2 justify-center items-center">
              <div className="relative">
                <img className=" w-6 h-6 rounded-xl" src={pic2} alt="" />
                <div className="online bg-lime-500 w-2 h-2 rounded-xl absolute top-0 right-0" />
              </div>
              <p>Rize Enf</p>
            </div>
          </div>
          <div className="item flex flex-row justify-between py-2 ">
            <div className="userInfo flex flex-row gap-2 justify-center items-center">
              <div className="relative">
                <img className=" w-6 h-6 rounded-xl" src={pic2} alt="" />
                <div className="online bg-lime-500 w-2 h-2 rounded-xl absolute top-0 right-0" />
              </div>
              <p>Rize Enf</p>
            </div>
          </div>
          <div className="item flex flex-row justify-between py-2 ">
            <div className="userInfo flex flex-row gap-2 justify-center items-center">
              <div className="relative">
                <img className=" w-6 h-6 rounded-xl" src={pic2} alt="" />
                <div className="online bg-lime-500 w-2 h-2 rounded-xl absolute top-0 right-0" />
              </div>
              <p>Rize Enf</p>
            </div>
          </div>
          <div className="item flex flex-row justify-between py-2 ">
            <div className="userInfo flex flex-row gap-2 justify-center items-center">
              <div className="relative">
                <img className=" w-6 h-6 rounded-xl" src={pic2} alt="" />
                <div className="online bg-lime-500 w-2 h-2 rounded-xl absolute top-0 right-0" />
              </div>
              <p>Rize Enf</p>
            </div>
          </div>
          <div className="item flex flex-row justify-between py-2 ">
            <div className="userInfo flex flex-row gap-2 justify-center items-center">
              <div className="relative">
                <img className=" w-6 h-6 rounded-xl" src={pic2} alt="" />
                <div className="online bg-lime-500 w-2 h-2 rounded-xl absolute top-0 right-0" />
              </div>
              <p>Rize Enf</p>
            </div>
          </div>
          <div className="item flex flex-row justify-between py-2 ">
            <div className="userInfo flex flex-row gap-2 justify-center items-center">
              <div className="relative">
                <img className=" w-6 h-6 rounded-xl" src={pic2} alt="" />
                <div className="online bg-lime-500 w-2 h-2 rounded-xl absolute top-0 right-0" />
              </div>
              <p>Rize Enf</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
