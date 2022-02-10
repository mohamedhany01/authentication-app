import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);
const UserContextProvider = UserContext.Provider;

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const setData = (data) => {
    setUserData(data);
  };

  const deleteData = () => {
    setUserData(null);
  };

  return (
    <UserContextProvider value={{ userData, setData, deleteData }}>
      {children}
    </UserContextProvider>
  );
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
