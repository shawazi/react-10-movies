import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from '../auth/firebase';
import { toast, ToastContainer } from "react-toastify";



const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(false);
    const [loading, setLoading] = useState(true);

    const signup = async (email, password) => {
        try {
            setLoading(true);
            const userCredential = await auth.createUserWithEmailAndPassword(email, password);
            const user = userCredential.user;
            setCurrentUser(user);
            setLoading(false);
            toast.success("You've been signed up!");
        } catch (error) {
            setLoading(false);
            toast.error(error.message.replace("Firebase: ", ""));
        } 
    }

    const login = async (email, password) => {
        try {
            setLoading(true);
            const user = await auth.signInWithEmailAndPassword(email, password);
            const userCredential = user.user;
            setCurrentUser(userCredential);
            toast.success("Logged in.")
            setLoading(false);
        } catch (error) {
            setLoading(false);
            toast.error(error.message.replace("Firebase: ", ""));
        }
    }

    const logout = async () => {
        await auth.signOut();
        setCurrentUser(false);
        toast.success("Logged out.");
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);

        })
        return unsubscribe
    }, []);

    const values = {
        currentUser,
        signup,
        login,
        logout,
        loading, 
        // success,
        // setSuccess
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
            <ToastContainer theme="dark" autoClose={7000} newestOnTop={true} />
        </AuthContext.Provider>
    )
}