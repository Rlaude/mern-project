import { Link } from "react-router-dom";

const NarrativeList = ({ narratives }) => {
  return (
    <div className="narrative-list">
      {narratives.map(narrative => (
        <div className="narrative-preview" key={narrative._id} >
          <Link to={`/narratives/${narrative._id}`}>
            <h2>{ narrative.title }</h2>
            <p> { narrative.snippet }</p>
            
          </Link>
        </div>
      ))}
    </div>
  )
}

export default NarrativeList;