import { useEffect } from 'react';
import { useNarrativesContext } from '../hooks/useNarrativesContext';
import { Link } from 'react-router-dom';

// components
import NarrativeDetails from '../components/NarrativeDetails';


const Home = () => {
    const { narratives, dispatch } = useNarrativesContext()
    console.log(narratives)
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
            {narratives && narratives.map(narrative => (
                <div>
            
                    
                    <NarrativeDetails narrative={narrative}/>
                    
                    
                
                
                </div>
                ))}
        </div>   
        <Link to="/Add">
        <button className="addButton">New Narrative</button>
        </Link>

    </div>
    )
};
/*We pass as a prop the actual narrative therefore narrative is equal to the whole narrative object. Now we have access to is as prop inside the NarrativeDetails component*/
/*normal parenthesis instead of curly braces since we are returning some template*/
export default Home;