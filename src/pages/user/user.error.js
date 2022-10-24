import React from 'react';
import { NavLink } from 'react-router-dom';

const UserError = () => {
  return (
    <div className="flex h-screen justify-center items-center bg-blue-200">
      <div className="bg-gray-200 flex flex-col text-2xl text-red-700 p-10 rounded-md gap-y-4 ">
        <span>Can't Get Data</span>
        <NavLink
          to="/users"
          className="text-center border bg-gray-600 text-gray-100 mt-2 p-1 rounded-sm"
        >
          Go Back
        </NavLink>
      </div>
    </div>
  );
};

export default UserError;
