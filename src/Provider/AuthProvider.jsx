import React, { createContext, useState } from 'react';

export const AuthContext = new createContext(null)



const AuthProvider = ({children}) => {

    const [currentSlide, setCurrentSlide] = useState(null)

    const authInfo = {currentSlide, setCurrentSlide}

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;