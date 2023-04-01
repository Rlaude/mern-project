import { useNarrativesContext } from '../hooks/useNarrativesContext';
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { useNavigate } from 'react-router-dom';

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
//import NarrativeList from './NarrativeList';

//import { Link } from 'react-router-dom';
const NarrativeDetails = () => {
    const { dispatch } = useNarrativesContext();
    const { id } = useParams();
    //console.log(id)
    const { data: narrative, error, isPending } = useFetch('http://localhost:4000/narratives/' + id);
    const navigate = useNavigate();

    
    const handleClick = async () => {
        const response = await fetch('/narratives/' + narrative._id, {
            method: 'DELETE' 
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_NARRATIVE', payload: json})
            navigate('/');
        }
        
    }
   
    return (
        <div className="narrative-details">
            {isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { narrative && (
            <article>
                <h2>{ narrative.title }</h2>
                <p>{ narrative.snippet }</p>
                <div>{ narrative.body }</div>
                <p>{formatDistanceToNow(new Date(narrative.createdAt), { addSuffix: true })}</p>
                <button onClick={handleClick}>delete</button>
            </article>
            )}
          
        </div>
                
        
    )
} //In the parameters we can desctructure from the props, that props we pass through from Home.js - narrative

export default NarrativeDetails;