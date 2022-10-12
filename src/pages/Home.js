import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex gap-x-8 justify-center">
      <NavLink to="/login">login</NavLink>
      <NavLink to="/register">register</NavLink>
      <NavLink to="/users">users</NavLink>
    </div>
  );
};

export default Home;
