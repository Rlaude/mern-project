const NarrativeDetails = ({ narrative }) => {
    return (
        <div className="narrative-details">
            <h4>{narrative.title}</h4>
            <p><strong>Synopsis: </strong>{narrative.snippet}</p>
            <p><strong>Story Line: </strong>{narrative.body}</p>
            <p>{narrative.createAt}</p>
        </div>
    )
} //In the parameters we can desctructure from the props, that props we pass through from Home.js - narrative

export default NarrativeDetails;