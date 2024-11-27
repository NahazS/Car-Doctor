import { createUserWithEmailAndPassword, FacebookAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../FireBase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import axios from 'axios';

export const AuthContext = new createContext(null)



const AuthProvider = ({children}) => {

    const [currentSlide, setCurrentSlide] = useState(null)

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = () => {
        return signOut(auth)
    }
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }
    const signInWithFacebook = () => {
        const provider = new FacebookAuthProvider();
        return signInWithPopup(auth, provider)
    }
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, newUser => {
            const userEmail = newUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            setUser(newUser)
            setLoading(false)
            if(newUser)
            {
                axios.post('http://localhost:3000/jwt',loggedUser, { withCredentials: true })
                .then(res => console.log(res.data))
            } 
            else{
                axios.post('http://localhost:3000/logOut', loggedUser, {withCredentials: true})
                .then(res => console.log(res.data))
            }
        })
        return () => {unSubscribe}
    },[])







    const authInfo = {
        currentSlide, 
        setCurrentSlide,
        user,
        loading,
        signUpUser,
        signInUser,
        signInWithGoogle,
        signOutUser,
        signInWithFacebook,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;