import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from '../auth/firebase'

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(false);
    const [loading, setLoading] = useState(true);
    const [registerError, setRegisterError] = useState("");
    const [loginError, setLoginError] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const signup = async (email, password) => {
        try {
            setLoading(true);
            setError("");
            const userCredential = await auth.createUserWithEmailAndPassword(email, password);
            const user = userCredential.user;
            setCurrentUser(user);
            setLoading(false);
        } catch (error) {
            setRegisterError("Failed to sign up: " + error.message) 
            setLoading(false); 
            // console.log(error)
        } 
    }

    const login = async (email, password) => {
        try {
            const user = await auth.signInWithEmailAndPassword(email, password);
            return user;
        } catch (error) {
            setLoginError("Failed to log in: " + error.message)
            // console.log(error)
        }
    }

    const logout = async () => {
        await auth.signOut();
        setCurrentUser(false);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
            setRegisterError("");
            if (success) {
                setTimeout(() => {
                    setSuccess(false);
                }, 5000);
            }
        })
        return unsubscribe
    }, [success]);

    const value = {
        currentUser,
        signup,
        login,
        logout,
        registerError,
        loginError,
        loading, 
        error,
        success,
        setSuccess
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}