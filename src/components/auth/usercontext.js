import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({ childern }) {
  const [user, setUser] = useState(null);

  const setUserDetails = (userData) => {
    setUser(userData);
  };

  const value = {
    user,
    setUserDetails,
  };

  return <UserContext.Provider value={value}>{childern}</UserContext.Provider>;
}
