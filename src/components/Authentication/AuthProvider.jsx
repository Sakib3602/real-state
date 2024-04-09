import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.init";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [person,setPerson] = useState(null)
  // google sign in
  const googleProvider = new GoogleAuthProvider();
  function google() {
    return signInWithPopup(auth, googleProvider);
  }

  // email password sign up
  function emailPassword(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  // email password sing in
  function signInEmailPassword(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
//   log out
function logout(){
    setPerson("")
    signOut(auth)
  
}
  //   on auth state change

  useEffect(()=>{
    const DeleteIt = onAuthStateChanged(auth, (user) => {
        if (user) {
            setPerson(user)
            console.log("on auth",user)
            
        } else {
            console.log("No One Here")
         
        }
      });
      
      return ()=>{
        DeleteIt()
      }

},[])

  const info = {
    emailPassword,
    signInEmailPassword,
    google,
    person,
    logout
  };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
