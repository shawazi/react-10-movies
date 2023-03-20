import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from '../auth/firebase'


const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const signup = async (email, password) => {
        try {
            setLoading(true);
            setError("");
            const userCredential = await auth.createUserWithEmailAndPassword(email, password);
            const user = userCredential.user;
            setCurrentUser(user);
            setLoading(false);
        } catch (error) {
            setError("Failed to sign up: " + error.message) 
            setLoading(false); 
        } 
    }

    const login = async (email, password) => {
        try {
            await auth.signInWithEmailAndPassword(email, password)
        } catch (error) {
            setError("Failed to log in: " + error.message)
            // console.log(error)
        }
    }

    const logout = async () => {
        await auth.signOut();
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
            
        })
        return unsubscribe
    }, []);

    const value = {
        currentUser,
        signup,
        login,
        logout,
        error
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}