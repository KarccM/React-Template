import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Error403 from '../../components/error403';

// const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

// const getUser = () =>
//   sleep(1000) //.then(() => ({ username: 'elmo' }));
//     .then(() => null);

const AuthContext = React.createContext();
export function AuthProvider({ children }) {
  const [state, setState] = React.useState({
    status: 'pending',
    error: null,
    user: null,
  });
  React.useEffect(() => {
    getUser().then(
      (user) => setState({ status: 'success', error: null, user }),
      (error) => setState({ status: 'error', error, user: null })
    );
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
