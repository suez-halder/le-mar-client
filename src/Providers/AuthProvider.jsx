import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';



export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const register = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const githubSignIn = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }


    const displayUser = (displayName, photoURL) => {
        setLoading(true);
        return updateProfile(auth.currentUser, { displayName: displayName, photoURL: photoURL })
            .then(() => {
                // console.log('Profile updated successfully!');
                setLoading(false);
            })
            .catch((error) => {
                console.log('Error updating profile:', error);
                setLoading(false);
            });
    }


    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        // stop observing while unmounting
        return () => {
            return unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        setUser,
        register,
        logIn,
        googleSignIn,
        githubSignIn,
        displayUser,
        setLoading,
        loading,
        logOut


    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;