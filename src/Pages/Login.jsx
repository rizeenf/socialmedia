import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import "./Login.css";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className="w-screen h-screen text-white bg-blue-200 justify-center items-center flex ">
      <div className="w-1/2 h-2/3 flex rounded-md overflow-hidden sm:w-3/4 sm:h-3/4">
        <div className="leftLogin  flex-1 flex flex-col gap-10 bg-white p-10 sm:hidden">
          <h1 className="text-4xl font-semibold">Welcome Sipaling social.</h1>
          <p className="font-light text-xs text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quo
            autem, vero, adipisci esse atque veritatis officia eos optio rerum,
            tenetur assumenda saepe voluptas! Unde, a? Pariatur ex placeat
            dolorum voluptatem rem
          </p>
          <p className=" text-sm">Don't have account yet?</p>
          <Link to={"../register"}>
            <button className=" text-gray-600 bg-blue-200 cursor-pointer p-2 rounded-md hover:bg-blue-100 w-1/2 ">
              Register
            </button>
          </Link>
        </div>
        <div className="text-gray-500 flex-1 bg-white p-20 flex items-center justify-center flex-col gap-20 sm:p-5">
          <h1 className=" text-4xl font-semibold sm:text-3xl">Login</h1>
          <form className=" flex flex-col justify-center items-center gap-8">
            <input
              type="text"
              className=" border-b-2 py-2"
              placeholder="Username"
            />
            <input
              type="password"
              className=" border-b-2 py-2"
              placeholder="Password"
            />
            <Link
              to="../"
              onClick={handleLogin}
              className="flex justify-center items-center"
            >
              <button className=" text-gray-600 bg-blue-200 cursor-pointer p-2 w-24 rounded-md hover:bg-blue-100 ">
                Login
              </button>
            </Link>
            <Link to="../register" className=" text-xs">
              Register
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
