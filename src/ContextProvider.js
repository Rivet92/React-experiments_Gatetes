import {createContext, useContext, useState} from 'react';

const AppContext = createContext()

export const useAppContext = () => {
    return useContext(AppContext)
}

export function ContextProvider({children}) {

    const [id, setId] = useState()

    return (
        <AppContext.Provider value={{id, setId}}>
            {children}
        </AppContext.Provider>
    )
}