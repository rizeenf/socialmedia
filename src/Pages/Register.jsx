import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-screen h-screen text-white bg-blue-200 justify-center items-center flex">
      <div className="w-1/2 h-2/3 flex flex-row-reverse rounded-md overflow-hidden sm:w-3/4 sm:h-3/4 ">
        <div className="leftLogin flex-1 flex flex-col gap-10 bg-white p-10 sm:hidden">
          <h1 className=" text-4xl font-semibold">Sipaling social.</h1>
          <p className="font-light text-xs text-justify ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quo
            autem, vero, adipisci esse atque veritatis officia eos optio rerum,
            tenetur assumenda saepe voluptas! Unde, a? Pariatur ex placeat
            dolorum voluptatem rem Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Blanditiis, consequuntur.
          </p>
          <p className="py-3">Already have an account?</p>
          <Link to={"/login"}>
            <button className=" text-gray-600 bg-blue-200 cursor-pointer p-2 rounded-md hover:bg-blue-100 w-1/2 ">
              Login
            </button>
          </Link>
        </div>
        <div className="text-gray-500 flex-1 bg-white p-20 flex items-center justify-center flex-col gap-20 sm:p-5">
          <h1 className=" text-4xl font-semibold sm:text-3xl">Register</h1>
          <form className=" flex flex-col justify-center items-center gap-8">
            <input
              type="text"
              className=" border-b-2"
              placeholder="Full name"
            />
            <input type="text" className=" border-b-2" placeholder="Username" />
            <input type="email" className=" border-b-2" placeholder="Email" />
            <input
              type="password"
              className=" border-b-2"
              placeholder="Password"
            />

            <button className=" text-gray-600 bg-blue-200 cursor-pointer p-2 rounded-md hover:bg-blue-100 w-2/3">
              Register
            </button>
            <Link to="../login" className=" text-xs">
              Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
