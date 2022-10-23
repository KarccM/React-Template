import React from 'react';

const AuthContext = React.createContext();
export function AuthProvider({ children }) {
  const [state, setState] = React.useState({
    status: 'success',
    error: null,
    user: null,
    token: null,
  });

  React.useEffect(() => {
    let userWithToken = localStorage.getItem('userWithToken')
      ? JSON.parse(localStorage.getItem('userWithToken'))
      : false;
    let { user, token } = userWithToken;
    if (token) setState({ ...state, token, user });
  }, []);

  return (
    <AuthContext.Provider value={{ state, setState }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthState() {
  const { state, setState } = React.useContext(AuthContext);
  const isPending = state.status === 'pending';
  const isError = state.status === 'error';
  const isSuccess = state.status === 'success';
  const isAuthenticated = state.user && isSuccess;
  const login = (user, token) => {
    setState({ ...state, user, token, status: 'success' });
    let userWithToken = { user, token };
    localStorage.setItem('userWithToken', JSON.stringify(userWithToken));
  };
  const logout = () => {
    setState({ ...state, user: null });
    localStorage.removeItem('userWithToken');
  };
  return {
    ...state,
    isPending,
    isError,
    isSuccess,
    isAuthenticated,
    login,
    logout,
  };
}
