import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className=" text-4xl text-gray-900 mb-8">Home</h1>
      <div className="flex justify-center gap-x-8 bg-gray-200 w-full py-2">
        <NavLink
          className={
            ' bg-gradient-to-br from-blue-400 to-blue-500 shadow-md hover:scale-90 transition duration-150 rounded-xl text-2xl text-white p-20'
          }
          to="/login"
        >
          Login
        </NavLink>
        <NavLink
          className={
            ' bg-gradient-to-br from-blue-400 to-blue-500 shadow-md hover:scale-90 transition duration-150 rounded-xl text-2xl text-white p-20'
          }
          to="/register"
        >
          Register
        </NavLink>
        <NavLink
          className={
            ' bg-gradient-to-br from-blue-400 to-blue-500 shadow-md hover:scale-90 transition duration-150 rounded-xl text-2xl text-white p-20'
          }
          to="/users"
        >
          Users
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
