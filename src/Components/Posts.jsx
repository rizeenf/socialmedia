import React from "react";
import Post from "./Post";

const Posts = () => {
  // TEMPORARY DATA
  const posts = [
    {
      id: 1,
      userId: 1001,
      name: "Rize Enf",
      profilePic:
        "https://images.pexels.com/photos/16606842/pexels-photo-16606842/free-photo-of-animal-dog-pet-cute.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      postImg:
        "https://images.pexels.com/photos/938910/pexels-photo-938910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      postDesc: "Cantikkk dann Ganteeeeeeeeenggggg <3 <3333",
    },
    {
      id: 2,
      userId: 1002,
      name: "Rize Enf",
      profilePic:
        "https://images.pexels.com/photos/16606842/pexels-photo-16606842/free-photo-of-animal-dog-pet-cute.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      postImg: "",
      postDesc:
        " Our song on the radio but it don't sound the same   When our friends talk about you     All it does is just tear me down     Cause my heart breaks a little         I know I gave it to you months ago I know youre trying to forget But between the drinks and subtle things The holes in my apologies You know Im trying hard to take it back ",
    },
    {
      id: 3,
      userId: 1003,
      name: "Rize Enf",
      profilePic:
        "https://images.pexels.com/photos/16606842/pexels-photo-16606842/free-photo-of-animal-dog-pet-cute.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      postImg:
        "https://images.pexels.com/photos/326929/pexels-photo-326929.jpeg?auto=compress&cs=tinysrgb&w=1600",
      postDesc: "Beli Bleki dan Browny, buat kurbann <33",
    },
    {
      id: 4,
      userId: 1004,
      name: "Rize Enf",
      profilePic:
        "https://images.pexels.com/photos/16606842/pexels-photo-16606842/free-photo-of-animal-dog-pet-cute.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      postImg: "",
      postDesc:
        "Our song on the radio but it don't sound the same   When our friends talk about you     All it does is just tear me down     Cause my heart breaks a little         I know I gave it to you months ago I know youre trying to forget But between the drinks and subtle things The holes in my apologies You know Im trying hard to take it back Our song on the radio but it don't sound the same   When our friends talk about you     All it does is just tear me down     Cause my heart breaks a little         I know I gave it to you months ago I know youre trying to forget But between the drinks and subtle things The holes in my apologies You know Im trying hard to take it back",
    },
    {
      id: 5,
      userId: 1005,
      name: "Rize Enf",
      profilePic:
        "https://images.pexels.com/photos/16606842/pexels-photo-16606842/free-photo-of-animal-dog-pet-cute.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      postImg:
        "https://images.pexels.com/photos/933648/pexels-photo-933648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      postDesc: "Beli Bleki dan Browny, buat kurbann <33",
    },
  ];
  return (
    <div className=" h-full flex flex-col gap-5 scroll-smooth">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
