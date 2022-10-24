import { Navigate } from 'react-router-dom';
import { useAuthState } from '../../context/Auth';

const AuthorizedRoute = ({ children }) => {
  const { isAuthenticated } = useAuthState();
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default AuthorizedRoute;
