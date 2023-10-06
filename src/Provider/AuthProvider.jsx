
import { useState } from 'react';
import { createContext } from 'react';
import app from '../Firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { useEffect } from 'react';
export const AuthContext = createContext()
const auth = getAuth(app)
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user, setUser] = useState({displayName:"kar"})
    const [loader, setLoader] = useState(true)
const userRegister = (email,password) =>{
    setLoader(true)
 return createUserWithEmailAndPassword(auth, email, password)
};
const userLogin = (email,password) =>{
    setLoader(true)
    return signInWithEmailAndPassword(auth,email,password)
}
useEffect(()=>{
 const unsubscribe = onAuthStateChanged(auth, currentUser=>{
    console.log(currentUser);
        setUser(currentUser)
        setLoader(false)
    })
    return ()=> unsubscribe()
},[])
const userLogOut = ()=>{
    setLoader(true)
    return signOut(auth)
}
const userUpdateProfile = (profile) =>{
    console.log(profile,auth.currentUser);
    return updateProfile(auth.currentUser, profile)
}
    const authInfo = { user,loader,userRegister,userLogin,userLogOut,userUpdateProfile}
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;