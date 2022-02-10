import { createContext, useContext, useState } from "react";

const AuthenticationContext = createContext(null);
const AuthenticationContextProvider = AuthenticationContext.Provider;

const AuthenticationProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const login = (token) => {
    setToken(token);
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <AuthenticationContextProvider value={{ token, login, logout }}>
      {children}
    </AuthenticationContextProvider>
  );
};

const useAuthentication = () => useContext(AuthenticationContext);

export { AuthenticationProvider, useAuthentication };
