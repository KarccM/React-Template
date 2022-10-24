import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthState } from '../../context/Auth';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuthState();
  return (
    <div className="flex justify-between">
      <div>Logo</div>
      <div className="flex gap-x-4">
        {!isAuthenticated ? (
          <>
            <NavLink to="login">Login</NavLink>
            <NavLink to="register">Register</NavLink>
          </>
        ) : (
          <button
            onClick={() => {
              logout();
            }}
          >
            Log out
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
