import React from 'react';

const View = ({ user, setEditMode, navigate }) => {
  return (
    <div className="flex h-screen justify-center items-center bg-blue-200">
      <div className="flex flex-col bg-gray-50 p-8 border rounded-md gap-y-4 text-center text-xl">
        <div>id : {user.id}</div>
        <div>first_name : {user?.first_name}</div>
        <div>last_name : {user?.last_name}</div>
        <div>age : {user?.age}</div>
        <div>salary : {user?.salary}</div>
        <div>country : {user?.country}</div>
        <button
          className="bg-orange-500 text-white rounded-md"
          onClick={() => setEditMode(true)}
        >
          Edit
        </button>
        <button
          className="bg-gray-500 text-white rounded-md"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default View;
