import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import useGame from "../hooks/useGame";
import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import useScrollAnimation from "../hooks/useScrollAnimation";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  const [forgetEmail, setForgetEmail] = useState("");
  const { gamesData, gameLoading, gameError } = useGame();

  // Scroll animation hook
  useScrollAnimation();

  //create user
  const createUser = (email, password) => {
    setUserLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //current User Info
  useEffect(() => {
    //1. set the observer and save it in a variable
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setUserLoading(false);
    });
    //2. return and call the variable to delete the reference/clear the observer
    return () => unsubscribe();
  }, []);

  //email verify
  const userEmailVerify = () => {
    setUserLoading(true);
    return sendEmailVerification(auth.currentUser);
  };

  //sign in with google
  const signInGoogle = () => {
    setUserLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //login
  const logInUser = (email, password) => {
    setUserLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //update user
  const updateUserProfile = (displayName, photoURL) => {
    setUserLoading(true);
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };

  //forget password
  const forgetUserPassword = (email) => {
    setUserLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  //remember password
  const userRememberPassword = () => {
    setUserLoading(true);
    return setPersistence(auth, browserLocalPersistence);
  };

  //logout
  const logOutUser = () => {
    return signOut(auth);
  };

  const authInfo = {
    gamesData,
    gameLoading,
    gameError,
    user,
    setUser,
    userLoading,
    setUserLoading,
    createUser,
    userEmailVerify,
    updateUserProfile,
    signInGoogle,
    logInUser,
    userRememberPassword,
    forgetUserPassword,
    logOutUser,
    forgetEmail,
    setForgetEmail,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
