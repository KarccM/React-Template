import { createBrowserRouter } from 'react-router-dom';
import MediaElement from '../../pages/media.element';
import Users from '../../pages/users';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Users />,
    errorElement: <p>404 not Found</p>,
  },
  {
    path: '/media',
    element: <MediaElement />,
  },
]);
