import React, { useContext, useState, useEffect } from "react";
import { auth } from '../auth/firebase'


const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true)

    async function signup(email, password) {
        try {
            return await auth.createUserWithEmailAndPassword(email, password);
        } finally {
            return setLoading(false);
        }
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
        signup
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}