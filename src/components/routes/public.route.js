import { Navigate } from 'react-router-dom';
import { useAuthState } from '../../context/Auth';

const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useAuthState();
  return !isAuthenticated ? children : <Navigate to="/" />;
};

export default PublicRoute;
