"use client"

import { useReducer, createContext } from 'react';
import { GlobalReducer, initialState } from './GlobalReducer';

export const GlobalContext = createContext();

// Create our Provider with our Reducer as our state manager
export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(GlobalReducer, initialState);

    return (
        <GlobalContext.Provider value={[state, dispatch]}>
                {children}
        </GlobalContext.Provider>
    );
};
