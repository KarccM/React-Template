import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Error403 from '../../components/error403';

const AuthContext = React.createContext();
export function AuthProvider({ children }) {
  const [state, setState] = React.useState({
    status: 'success',
    error: null,
    user: null,
    token: null,
    login: (user, token) => {
      setState({ ...state, user, token, status: 'success' });
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', JSON.stringify(token));
    },
    logout: () => {
      setState({ ...state, user: null });
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
  });

  React.useEffect(() => {
    let token = localStorage.getItem('token')
      ? JSON.parse(localStorage.getItem('token'))
      : false;
    let user = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : false;
    if (token) setState({ ...state, token, user });
  }, []);

  return (
    <AuthContext.Provider value={state}>
      {state.status === 'pending' ? (
        <div className="text-center flex h-screen justify-center items-center">
          <CircularProgress />
        </div>
      ) : state.status === 'error' ? (
        <Error403 />
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}

export function useAuthState() {
  const state = React.useContext(AuthContext);
  const isPending = state.status === 'pending';
  const isError = state.status === 'error';
  const isSuccess = state.status === 'success';
  const isAuthenticated = state.user && isSuccess;
  return {
    ...state,
    isPending,
    isError,
    isSuccess,
    isAuthenticated,
  };
}
