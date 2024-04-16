import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.init";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true)
  // github sign in
  const gitProvider = new GithubAuthProvider();

  function github() {
    setLoading(true)
    return signInWithPopup(auth, gitProvider);
  }

  
  // google sign in
  const googleProvider = new GoogleAuthProvider();
  function google() {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  }

  // email password sign up
  function emailPassword(email, password) {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }
  // email password sing in
  function signInEmailPassword(email, password) {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  }
  //   log out
  function logout() {
    setLoading(true)
    setPerson("");
    signOut(auth);
  }
  // update profile
  function update(name, photo) {
    // setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  }

  //   on auth state change

  useEffect(() => {
    const DeleteIt = onAuthStateChanged(auth, (user) => {
      
      if (user) {
        setPerson(user);
        console.log("on auth", user);
      } 
      setLoading(false)
    });

    return () => {
      DeleteIt();
    };
  }, []);

  const info = {
    emailPassword,
    signInEmailPassword,
    google,
    person,
    logout,
    github,
    update,
    setPerson,
    loading
  };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
