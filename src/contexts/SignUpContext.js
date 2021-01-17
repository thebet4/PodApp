import React,{createContext, useReducer} from 'react';
import {initialState, SignUpReducer} from '../reducers/SignUpReducer';
export const SignUpContext = createContext();

export default ({children}) => {

    const [state,dispatch] = useReducer(SignUpReducer, initialState);

    return(
        <SignUpContext.Provider value={{state,dispatch}}>
            {children}
        </SignUpContext.Provider>
    )
};