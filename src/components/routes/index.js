import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Login from '../../pages/auth/login';
import Register from '../../pages/auth/register';
import Home from '../../pages/Home';
import Users from '../../pages/user/users';
import Error404 from '../error404';
import User, { loader as userLoader } from '../../pages/user/user';
import Add from '../../pages/user/add';
import RootLayout from '../root.layout';
import { QueryClient } from 'react-query';
import UserError from '../../pages/user/user.error';

const queryClient = new QueryClient();

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<Error404 />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="user">
        <Route path="add" element={<Add />} />
        <Route
          path=":id"
          element={<User />}
          errorElement={<UserError />}
          loader={userLoader(queryClient)}
        />
      </Route>
      <Route path="users" element={<Users />} />
    </Route>
  )
);
