import React, { useState } from "react";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import Comments from "./Comments";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const [likes, setLikes] = useState(false);
  const [commentOpened, setCommentOpened] = useState(false);

  return (
    <div className=" container items p-4 rounded-lg dark:bg-gray-800 dark:text-gray-200 flex flex-col gap-4 scroll-smooth">
      <div className="user flex flex-row justify-between ">
        <div className="userInfo flex flex-row gap-3 justify-center items-center">
          <Link to={`/profile/${post.userId}`}>
            <img
              src={post.profilePic}
              className="w-8 h-8 rounded-full object-cover"
              alt=""
            />
          </Link>

          <div className="flex flex-col">
            <Link to={`/profile/${post.userId}`}>
              <span>{post.name}</span>
            </Link>
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
        <div
          className="interaction-items cursor-pointer flex flex-row gap-2"
          onClick={() => setLikes(!likes)}
        >
          {likes ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
          <span>13 Likes</span>
        </div>
        <div
          className="interaction-items cursor-pointer flex flex-row gap-2"
          onClick={() => setCommentOpened(!commentOpened)}
        >
          <InsertCommentOutlinedIcon />
          <span>4 Comment</span>
        </div>
        <div className="interaction-items cursor-pointer flex flex-row gap-2">
          <ReplyOutlinedIcon />
          <span>Share</span>
        </div>
      </div>
      {commentOpened && <Comments />}
    </div>
  );
};

export default Post;
