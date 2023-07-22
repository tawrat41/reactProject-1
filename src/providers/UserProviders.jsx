/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext } from 'react';

const UserContext = createContext(null);

const UserProviders = ({children}) => {
    const user = {}
    return (
        <UserContext.Provider value = {user}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProviders;