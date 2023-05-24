import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Stories = () => {
  // temporary stories
  const stories = [
    {
      id: 1,
      name: "Temannya Rize",
      storyImg:
        "https://images.pexels.com/photos/16567051/pexels-photo-16567051/free-photo-of-street-in-town-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Temannya Rize",
      storyImg:
        "https://images.pexels.com/photos/16567051/pexels-photo-16567051/free-photo-of-street-in-town-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Temannya Rize",
      storyImg:
        "https://images.pexels.com/photos/16567051/pexels-photo-16567051/free-photo-of-street-in-town-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "Temannya Rize",
      storyImg:
        "https://images.pexels.com/photos/16567051/pexels-photo-16567051/free-photo-of-street-in-town-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      name: "Temannya Rize",
      storyImg:
        "https://images.pexels.com/photos/16567051/pexels-photo-16567051/free-photo-of-street-in-town-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const { currUser } = useContext(AuthContext);

  return (
    <div className=" flex flex-row gap-3 overflow-hidden mb-8">
      <div className=" flex flex-row relative ">
        <img
          src="https://images.pexels.com/photos/16903397/pexels-photo-16903397/free-photo-of-la-soltera-dominante.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className=" w-40 h-56 rounded-md object-cover"
        />
        <div className=" w-6 h-6 rounded-full bg-blue-500 absolute left-2 bottom-8 flex justify-center font-extrabold items-center ">
          +
        </div>
        <span className=" absolute left-2 bottom-2 text-white">
          {currUser.name}
        </span>
      </div>
      {stories.map((story) => (
        <div className=" flex flex-row relative " key={story.id}>
          <img
            src={story.storyImg}
            alt=""
            className=" w-40 h-56 rounded-md object-cover"
          />
          <span className=" absolute left-2 bottom-2 text-white">
            {story.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
