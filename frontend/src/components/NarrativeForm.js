import { useState } from 'react';
import { useNarrativesContext } from '../hooks/useNarrativesContext'; //to dispatch an action to update our context state, add new narrative to our global context state so it would display without us refreshing(keeping ui in sync with our database)

const NarrativeForm = () => {
    const { dispatch } = useNarrativesContext() //we destructure the dispatch function from the useNarrativesContext. We then add this dispatch function after we successfully added a document to database.

    /* create state for each property */
    const [title, setTitle] = useState('');
    const [snippet, setSnippet] = useState('');
    const [body, setBody] = useState('');
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault() //to prevent default action from page refresh
    
        const narrative = {title, snippet, body}

        const response = await fetch('/narratives', {
            method: 'POST',
            body: JSON.stringify(narrative), //have to turn narrative object to json string
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json() //if you go back to the post request handler, we always ensure we are getting back json
    
        if (!response.ok) {
            setError(json.error) //in the controller, we have the error property
        }
        if (response.ok) {
            setTitle('') //resetting the form 
            setSnippet('')
            setBody('')
            setError(null) //in case if there was an error previously
            console.log('new narrative added', json)
            dispatch({type: 'CREATE_NARRATIVE', payload: json})
        }
    }

    return (
        <form className='create' onSubmit={handleSubmit}>
            <h3>Add a New Narrative</h3>

            <label>Narrative Title:</label>
            <input 
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title} 
            />

            <label>Synopsis:</label>
            <input 
                type="text"
                onChange={(e) => setSnippet(e.target.value)}
                value={snippet} 
            />

            <label>The Narrative:</label>
            <input 
                type="text"
                onChange={(e) => setBody(e.target.value)}
                value={body} 
            />

            <button>Add Narrative</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
};

export default NarrativeForm;