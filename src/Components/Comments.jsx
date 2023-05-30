import React, { useContext, useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { AuthContext } from "../Context/AuthContext";

const Comments = () => {
  const [likess, setLikess] = useState(false);

  const { currentUser } = useContext(AuthContext);
  // TEMPORARY DATA

  const comments = [
    {
      id: 1,
      userid: 1001,
      commentUser: "Temannya Rize",
      commentDesc: " Lorem ipsum dolor sit amet, ",
      commentProfile:
        "https://images.pexels.com/photos/16567051/pexels-photo-16567051/free-photo-of-street-in-town-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      userid: 1002,
      commentUser: "Temannya Rize",
      commentDesc:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum explicabo cumque blanditiis, itaque neque eveniet provident consectetur assumenda obcaecati soluta repudiandae ullam, nobis voluptates hic possimus voluptas deserunt quia ipsa quas. Enim, delectus quo laborum reprehenderit, sed ex eveniet magni libero velit optio doloremque possimus eum facilis. Inventore, qui nisi.",
      commentProfile:
        "https://images.pexels.com/photos/16567051/pexels-photo-16567051/free-photo-of-street-in-town-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      userid: 1003,
      commentUser: "Temannya Rize",
      commentDesc:
        " Lorem ipsumsed ex eveniet magni libero velit optio doloremque possimus eum facilis. Inventore, qui nisi.",
      commentProfile:
        "https://images.pexels.com/photos/16567051/pexels-photo-16567051/free-photo-of-street-in-town-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      userid: 1004,
      commentUser: "Temannya Rize",
      commentDesc:
        " Lorem ipsum dolor sit amet, consectetur  quas. Enim, delectus quo laborum reprehenderit, sed ex eveniet magni libero velit optio doloremque possimus eum facilis. Inventore, qui nisi.",
      commentProfile:
        "https://images.pexels.com/photos/16567051/pexels-photo-16567051/free-photo-of-street-in-town-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <div className=" flex flex-col gap-5">
      <div className="flex flex-row justify-between items-center w-full gap-4 ">
        <img
          src="https://images.pexels.com/photos/16903397/pexels-photo-16903397/free-photo-of-la-soltera-dominante.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-8 h-8 rounded-full object-cover"
          alt=""
        />
        <div className=" w-full flex flex-row justify-between items-center gap-2">
          <input
            type="text"
            placeholder=" Write a comment..."
            className="  w-full h-11  rounded-md bg-transparent border-gray-500 border"
          />
          <button className="bg-blue-500 border-none p-2 rounded-sm text-white">
            Send
          </button>
        </div>
      </div>
      {comments.map((comment) => (
        <div key={comment.id} className="flex flex-col">
          <div className="flex flex-row gap-5">
            <img
              src={comment.commentProfile}
              className="w-8 h-8 rounded-full object-cover"
              alt=""
            />

            <div className="userInfo flex flex-col gap-1 w-full">
              <div className=" flex flex-row justify-between">
                <span>{comment.commentUser}</span>
                <span className=" font-thin text-xs">1 minutes ago</span>
              </div>
              <span className=" text-sm font-light">{comment.commentDesc}</span>
              <div className="interaction flex flex-row gap-5">
                <div
                  className="interaction-items cursor-pointer flex flex-row gap-2 text-sm items-center"
                  onClick={() => setLikess(!likess)}
                >
                  {likess ? (
                    <FavoriteOutlinedIcon
                      sx={{ fontSize: "16px" }}
                      className=" w-4 h-4 text-xs"
                    />
                  ) : (
                    <FavoriteBorderOutlinedIcon
                      sx={{ fontSize: "16px" }}
                      className=" w-4 h-4 text-xs"
                    />
                  )}
                  <span>4 Likes</span>
                </div>
                <div className="interaction-items cursor-pointer flex flex-row gap-2 text-sm items-center">
                  <InsertCommentOutlinedIcon
                    sx={{ fontSize: "16px" }}
                    className=" w-4 h-4 text-xs"
                  />
                  <span>Comment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
