import { createBrowserRouter } from 'react-router-dom';
import Login from '../../pages/auth/login';
import Register from '../../pages/auth/register';
import Home from '../../pages/Home';
import GuestRoute from './guest.route';
import AuthRoute from './auth.route';
import Users from '../../pages/user/users';
import Error404 from '../error404';
import User from '../../pages/user/user';
import Add from '../../pages/user/add';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: (
      <GuestRoute>
        <Login />
      </GuestRoute>
    ),
  },
  {
    path: '/register',
    element: (
      <GuestRoute>
        <Register />
      </GuestRoute>
    ),
  },
  {
    path: '/users/*',
    element: (
      <AuthRoute>
        <Users />
      </AuthRoute>
    ),
    errorElement: <Error404 />,
  },
  {
    path: '/users/add',
    element: (
      <AuthRoute>
        <Add />
      </AuthRoute>
    ),
  },
  {
    path: '/user/:id',
    element: (
      <AuthRoute>
        <User />
      </AuthRoute>
    ),
  },
]);
