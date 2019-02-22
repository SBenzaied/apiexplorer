import React from 'react';
import './Suggestion.css';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
const Suggestions = (props) => {



  const img = "/portrait_small.jpg"
  const imgBig = "/portrait_incredible.jpg"
  let options
  switch (props.filter) {
    case "characters":
    options = props.results.map(r => (
      
      <li key={r.id}>
      <Link to={{pathname : "/characters", state:{name:r.name,description:r.description,image:r.thumbnail.path+imgBig}}}> {r.name}  <img class ="images" src={r.thumbnail.path + img} alt="" /></Link></li>
     ))

    break
    case "comics":
    options = props.results.map(r => (
      <li key={r.id}>
      <Link to={{pathname : "/comics", state:{title:r.title,nbPage:r.pageCount,image:r.thumbnail.path+imgBig,description:r.description}}}> {r.title} <img class ="images" src={r.thumbnail.path + img} alt="" /></Link></li>
      ))
      break
    case "series":
    options = props.results.map(r => (
      <li key={r.id}>
       <Link to={{pathname : "/series", state:{title:r.title,description:r.description,image:r.thumbnail.path+imgBig,startYear:r.startYear,
       endYear:r.endYear,rating:r.rating,type:r.type}}}> {r.title} <img class ="images" src={r.thumbnail.path + img} alt="" /></Link></li>
      ))
      break
    case "events":
    options = props.results.map(r => (
      <li key={r.id}>
      <Link to={{pathname : "/events", state:{title:r.title,description:r.description,image:r.thumbnail.path+imgBig,start:r.start,
       end:r.end}}}> {r.title} <img class ="images" src={r.thumbnail.path + img} alt="" /></Link></li>
        ))
    break
    case "creators":
      options = props.results.map(r => (
        <li key={r.id}>
         <Link to={{pathname : "/creators", state:{name:r.fullName,image:r.thumbnail.path+imgBig}}}> {r.fullName}  <img class ="images" src={r.thumbnail.path + img} alt="" /></Link></li>))
      break
  }
  return <ul>{options}</ul>
  
}

export default Suggestions