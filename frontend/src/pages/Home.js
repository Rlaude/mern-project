import { useEffect } from 'react';
import { useNarrativesContext } from '../hooks/useNarrativesContext';

// components
import NarrativeDetails from '../components/NarrativeDetails';
import NarrativeForm from '../components/NarrativeForm';

const Home = () => {
    const { narratives, dispatch } = useNarrativesContext()

    useEffect(() => {
        const fetchNarratives = async () => {
            const response = await fetch('/narratives')
            const json = await response.json() //we should now have an array of narrative objects

            if (response.ok) {
                dispatch({type: 'SET_NARRATIVES', payload: json})
            }
        }

        fetchNarratives()
    }, [dispatch])

    return (
    <div className="home">
        <div className="narratives">
            {narratives && narratives.map((narrative) => (
                <NarrativeDetails key={narrative._id} narrative={narrative}/> 
            ))} 
        </div>   
        <NarrativeForm />
    </div>
    )
};
/*We pass as a prop the actual narrative therefore narrative is equal to the whole narrative object. Now we have access to is as prop inside the NarrativeDetails component*/
/*normal parenthesis instead of curly braces since we are returning some template*/
export default Home;