import React, { useContext, useReducer } from "react";

const AppContext = React.createContext();

const useAppContext = () => {
    return useAppContext(AppContext);
}

const initialState = {
    users: [],
    toys: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_TOYS':
            {
                // Petición a base de datos
                return {
                    ...state,

                }
            }
        default:
            return state;
    }
}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{state: state, dispatch}}>
            {children}
        </AppContext.Provider>
    );
}

export {
    AppProvider, useAppContext
};