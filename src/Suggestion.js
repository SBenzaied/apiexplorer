import React from 'react';
//import creators from './creators.js';

//<Route path="/insert/your/path/here" component={YourComponent} /> 
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
const Suggestions = (props) => {

  function bar() { alert(props.filter); 
    const url = './creators.js';
    window.open(url, '_blank');
}

  const img = "/portrait_small.jpg"
  let options
  switch (props.filter) {
    case "characters":
    options = props.results.map(r => (
      <li onClick={() => bar()}  key={r.id}>
        {r.name}
        <img src={r.thumbnail.path + img} alt="" />
      </li>))
    break
    case "comics":
    options = props.results.map(r => (
      <li key={r.id}>
        {r.title}
        <img src={r.thumbnail.path + img} alt="" />
      </li>))
      break
    case "series":
    options = props.results.map(r => (
      <li key={r.id}>
        {r.title}
        <img src={r.thumbnail.path + img} alt="" />
      </li>))
      break
    case "events":
    options = props.results.map(r => (
      <li key={r.id}>
        {r.title}
        <img src={r.thumbnail.path + img} alt="" />
      </li>))
    break
    case "creators":
      options = props.results.map(r => (
        <li key={r.id}>
          {r.fullName}
          <img src={r.thumbnail.path + img} alt="" />
        </li>))
      break
  }
  return <ul>{options}</ul>
  
}

export default Suggestions