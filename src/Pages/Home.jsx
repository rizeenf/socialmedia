import React from "react";
import Posts from "../Components/Posts";
import Stories from "../Components/Stories";

const Home = () => {
  return (
    <div className="dark:bg-gray-700 dark:text-gray-100 p-8 min-h-full scroll-smooth">
      <Stories />
      <Posts />
    </div>
  );
};

export default Home;
