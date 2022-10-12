import { createBrowserRouter } from 'react-router-dom';
import Error404 from '../../components/error404';
import Home from '../../pages/Home';
import Login from '../../pages/login';
import Register from '../../pages/register';
import Add from '../../pages/user/add';
import Users from '../../pages/user/users';
import User from '../../pages/user/view.and.edit';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/users',
    element: <Users />,
    errorElement: <Error404 />,
  },
  {
    path: '/users/add',
    element: <Add />,
  },
  {
    path: '/users/:id',
    element: <User />,
  },
]);
