import { useState } from "react";
import AuthContext from "./AuthContext";
import useGame from "../hooks/useGame";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { gamesData, gameLoading, gameError } = useGame();

  const authInfo = { gamesData, gameLoading, gameError, user, setUser };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
