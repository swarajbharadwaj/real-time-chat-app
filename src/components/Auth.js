import {useState} from 'react';
import React from 'react';
import { loginWithGoogle } from '../config/loginwithgoogle';

const AuthContext = React.createContext();

const AuthProvider = (props) => {
       const [user, setUser] = useState(null);

    const login = async () => {
        const user = await loginWithGoogle();

        if (!user) {
              
        }
        setUser(user);  
        
    };
 const value = { user, login };
    return <AuthContext.Provider value={value} {...props} />;
};

export { AuthContext, AuthProvider };