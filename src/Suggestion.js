import React from 'react';
//import creators from './creators.js';

//<Route path="/insert/your/path/here" component={YourComponent} /> 
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
const Suggestions = (props) => {



  const img = "/portrait_small.jpg"
  let options
  switch (props.filter) {
    case "characters":
    options = props.results.map(r => (
      
      <li key={r.id}>
      <Link to={{pathname : "/characters", state:{test:"toto"}}}> {r.name} <img src={r.thumbnail.path + img} alt="" /></Link></li>
     ))

    break
    case "comics":
    options = props.results.map(r => (
      <li key={r.id}>
      <Link to="/comics"> {r.title} <img src={r.thumbnail.path + img} alt="" /></Link></li>
      ))
      break
    case "series":
    options = props.results.map(r => (
      <li key={r.id}>
       <Link to="/series"> {r.title} <img src={r.thumbnail.path + img} alt="" /></Link></li>
      ))
      break
    case "events":
    options = props.results.map(r => (
      <li key={r.id}>
      <Link to="/characters_events"> {r.title} <img src={r.thumbnail.path + img} alt="" /></Link></li>
        ))
    break
    case "creators":
      options = props.results.map(r => (
        <li key={r.id}>
         <Link to="/creators"> {r.fullName} <img src={r.thumbnail.path + img} alt="" /></Link></li>))
      break
  }
  return <ul>{options}</ul>
  
}

export default Suggestions