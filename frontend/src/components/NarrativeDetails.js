import { useNarrativesContext } from '../hooks/useNarrativesContext';

const NarrativeDetails = ({ narrative }) => {
    const { dispatch } = useNarrativesContext();
    
    const handleClick = async () => {
        const response = await fetch('/narratives/' + narrative._id, {
            method: 'DELETE'
        })
        const json = await response.json() // document that was deleted

        if (response.ok) {
            dispatch({type: 'DELETE_NARRATIVE', payload: json})
        }
    } //Inside the function, we want to communicate with the api. We have access to the narrative, descructured at the top
    
    return (
        <div className="narrative-details">
            <h4>{narrative.title}</h4>
            <p><strong>Synopsis: </strong>{narrative.snippet}</p>
            <p><strong>Story Line: </strong>{narrative.body}</p>
            <p>{narrative.createAt}</p>
            <span onClick={handleClick}>delete</span>
        </div>
    )
} //In the parameters we can desctructure from the props, that props we pass through from Home.js - narrative

export default NarrativeDetails;