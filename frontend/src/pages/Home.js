import { useEffect, useState } from 'react';

// components
import NarrativeDetails from '../components/NarrativeDetails';
import NarrativeForm from '../components/NarrativeForm';

const Home = () => {
    const [narratives, setNarratives] = useState(null);

    useEffect(() => {
        const fetchNarratives = async () => {
            const response = await fetch('/narratives')
            const json = await response.json() //we should now have an array of narrative objects

            if (response.ok) {
                setNarratives(json)
            }
        }

        fetchNarratives()
    }, [])

    return (
    <div className="home">
        <div className="narratives">
            {narratives && narratives.map((narrative) => (
                <NarrativeDetails key={narrative._id} narrative={narrative}/> 
            ))} {/*We pass as a prop the actual narrative therefore narrative is equal to the whole narrative object. Now we have access to is as prop inside the NarrativeDetails component*/}
        </div>   {/*normal parenthesis instead of curly braces since we are returning some template*/}
        <NarrativeForm />
    </div>
    )
};

export default Home;