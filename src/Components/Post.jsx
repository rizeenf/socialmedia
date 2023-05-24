import React from "react";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";

const Post = ({ post }) => {
  return (
    <div className=" container items p-4 rounded-lg dark:bg-gray-800 dark:text-gray-200 flex flex-col gap-4 scroll-smooth">
      <div className="user flex flex-row justify-between ">
        <div className="userInfo flex flex-row gap-3 justify-center items-center">
          <img
            src={post.profilePic}
            className="w-8 h-8 rounded-full object-cover"
            alt=""
          />
          <div className="flex flex-col">
            <span>{post.name}</span>
            <span className=" text-sm font-extralight">1 min ago</span>
          </div>
        </div>
        <MoreHorizOutlinedIcon />
      </div>
      <div className="content">
        <span>{post.postDesc}</span>
        <img
          src={post.postImg}
          className=" w-full max-h-96 rounded-sm object-cover"
          alt=""
        />
      </div>
      <div className="interaction flex flex-row gap-5">
        <div className="interaction-items cursor-pointer flex flex-row gap-2">
          <FavoriteBorderOutlinedIcon />
          <span>Likes</span>
        </div>
        <div className="interaction-items cursor-pointer flex flex-row gap-2">
          <InsertCommentOutlinedIcon />
          <span>Comment</span>
        </div>
        <div className="interaction-items cursor-pointer flex flex-row gap-2">
          <ReplyOutlinedIcon />
          <span>Share</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
