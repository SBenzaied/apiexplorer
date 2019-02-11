import React from 'react';


const Suggestions = (props) => {
    const img = "/portrait_small.jpg"
    const options = props.results.map(r => (
      <li key={r.id}>
        {r.name}
        <img src={r.thumbnail.path+img} alt=""/>
      </li>
      
    ))
    return <ul>{options}</ul>
    
  }
  
  export default Suggestions