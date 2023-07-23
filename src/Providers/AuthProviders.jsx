import React, { createContext, useEffect, useState } from 'react';

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,  } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app)

export const AuthConext = createContext(null);
const googleProvider = new GoogleAuthProvider()

const AuthProviders = ({children}) => {
const [user,setUser] = useState(null)

const [loading,setLoading] = useState(true)


const newCreateUser = (email,password) =>{
     setLoading(true)
     return  createUserWithEmailAndPassword(auth,email,password)
}

const signInNew = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
 }
 const googleSignIn = () =>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
 }

 useEffect(() => {
    const onSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('current user', currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      return onSubscribe();
    };
  }, []);




 const logOut = () =>{
    return signOut(auth)
 }
    const authInfo = {
        user,
        newCreateUser,
        signInNew,
        googleSignIn,
        logOut,
        loading
    }



    return (
        <AuthConext.Provider value={authInfo}>
            {children}
        </AuthConext.Provider>
    );
};

export default AuthProviders;