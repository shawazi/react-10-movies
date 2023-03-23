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
    const [registerError, setRegisterError] = useState("");
    // const [loginError, setLoginError] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const displayLoginSuccess = () => {
        toast.success(`Logged in.`);
      };
    
      const displayLoginFailure = () => {
        toast.error(`${error}`);
      };

    const signup = async (email, password) => {
        try {
            setLoading(true);
            setError("");
            const userCredential = await auth.createUserWithEmailAndPassword(email, password);
            const user = userCredential.user;
            setCurrentUser(user);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setRegisterError("Failed to sign up: " + error.message);
            toast.error(registerError);
            // console.log(error)
        } 
    }

    const login = async (email, password) => {
        try {
            const user = await auth.signInWithEmailAndPassword(email, password);
            const userCredential = user.user;
            setCurrentUser(userCredential);
            setError("");
            displayLoginSuccess();
        } catch (error) {
            setError("Failed to log in: " + error.message);
            displayLoginFailure();
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
            setError("");
            setSuccess(false);
        })
        return unsubscribe
    }, []);

    const values = {
        currentUser,
        signup,
        login,
        logout,
        loading, 
        error,
        success,
        setSuccess
    }

    return (
        <AuthContext.Provider value={values}>
            {!loading && children}
            <ToastContainer theme="dark" autoClose={7000} newestOnTop={true} />
        </AuthContext.Provider>
    )
}