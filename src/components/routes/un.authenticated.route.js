import { Navigate } from 'react-router-dom';
import { useAuthState } from '../../context/Auth';

const UnAuthenticatedRoute = ({ children }) => {
  const { isAuthenticated } = useAuthState();
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default UnAuthenticatedRoute;
