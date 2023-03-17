import { NarrativesContext } from '../context/NarrativesContext';
import { useContext } from 'react';

export const useNarrativesContext = () => {
    const context = useContext(NarrativesContext)

    if (!context) {
        throw Error('useNarrativesContext must be used inside a NarrativesContextProvider')
    }

    return context 
}