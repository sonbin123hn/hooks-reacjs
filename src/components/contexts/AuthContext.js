import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    //states
    const [isAuthenticated, setAuthendicated] = useState(false); 
    //effects
    useEffect(() => {
        alert(isAuthenticated ? "login successful" : "you can login now")
    },[isAuthenticated])

    
    const toggledAuth = () => {
        setAuthendicated(!isAuthenticated);
    }

    //context data

    const authContextData = {
        isAuthenticated ,toggledAuth
    }
    //return
    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;