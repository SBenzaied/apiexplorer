import React from 'react'
import App from './App'
import './App.css';
import Creators from './creators'
import Characters from './characters'
import Series from './series'
import Comics from './comics'
import Events from './events'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'




const Routes = () => {
    return (
    
    <Router>
<Switch>
        <Route exact path="/" component={App}/>
        <Route path="/creators" component={Creators}/>
        <Route path="/events" component={Events}/>
        <Route path="/characters" component={Characters}/>
        <Route path="/series" component={Series}/>
        <Route path="/comics" component={Comics}/>
        </Switch>
    </Router>
    
)}
  export default Routes