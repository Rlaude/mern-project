import { useState } from 'react';
import { useNarrativesContext } from '../hooks/useNarrativesContext'; //to dispatch an action to update our context state, add new narrative to our global context state so it would display without us refreshing(keeping ui in sync with our database)
import { useNavigate } from 'react-router-dom';

const NarrativeForm = () => {
    const { dispatch } = useNarrativesContext() //we destructure the dispatch function from the useNarrativesContext. We then add this dispatch function after we successfully added a document to database.

    /* create state for each property */
    const [title, setTitle] = useState('');
    const [snippet, setSnippet] = useState('');
    const [body, setBody] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);
    const navigate = useNavigate();

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
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setTitle('') //resetting the form 
            setSnippet('')
            setBody('')
            setError(null) //in case if there was an error previously
            setEmptyFields([])
            console.log('new narrative added', json)
            dispatch({type: 'CREATE_NARRATIVE', payload: json})
            navigate('/');
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
                className={emptyFields.includes('title') ? 'error': ''}
            />

            <label>Synopsis:</label>
            <input 
                type="text"
                onChange={(e) => setSnippet(e.target.value)}
                value={snippet} 
                className={emptyFields.includes('snippet') ? 'error': ''}
            />

            <label>The Narrative:</label>
            <textarea 
                cols="100" 
                rows="30"
                type="text"
                onChange={(e) => setBody(e.target.value)}
                value={body} 
                className={emptyFields.includes('body') ? 'error': ''}
            />
            <br />
            <button>Add Narrative</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
};

export default NarrativeForm;