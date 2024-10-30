import { useEffect, useState } from "react";

import { createContext, useContext } from "react";

// import { auth } from "../firebase";





export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(undefined);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        //onAuthStateChanged is a listener that listens to the user authentication state

        setTimeout(() => {
            setLoading(true);
            setIsAuth(true);
        }, 3000);

    }, []);

    const login = async (email, password) => {
        try {
            // await auth.signInWithEmailAndPassword(email, password);
        } catch (error) {
            console.log(error);
        }
    };

    const register = async (email, password, username, profileUrl) => {
        try {
            // await auth.signInWithEmailAndPassword(email, password);
        } catch (error) {
            console.log(error);
        }
    };

    const logOut = async () => {
        try {
            // await auth.signInWithEmailAndPassword(email, password);
        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <AuthContext.Provider value={{ user, isAuth, login, register, logOut }}>
        {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const value = useContext(AuthContext);

    if (!value) {
        throw new Error("useAuth must be used within AuthProvider");
    }

    return value;
}
    