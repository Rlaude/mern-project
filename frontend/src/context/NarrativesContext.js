import { createContext, useReducer } from 'react';

export const NarrativesContext = createContext()

export const narrativesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_NARRATIVES':
            return {
                narratives: action.payload
            }
        case 'CREATE_NARRATIVE': 
            return {
                narratives: [action.payload, ...state.narratives]
            }
        default: 
            return state
    }
}

export const NarrativesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(narrativesReducer, {
        narratives: null
    }) //we pass two arguments in the useReducer hook 1. reducer function name 2. Initial value for state which is an object here with narratives property


    //we can desctructure the children property from the props in this component. Children property represents whatever components/template - NarrativesContextProvider (that is accepting the props) wraps. Childer represent the root App component inside the index file. 
    return (
        <NarrativesContext.Provider value={{ ...state, dispatch }}>
            { children }
        </NarrativesContext.Provider>
    )
}