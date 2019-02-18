import React from 'react'
import App from './App'
import './App.css';
import Creators from './creators'
import Characters from './characters'
import Series from './series'
import Comics from './comics'
import Characters_events from './characters_events'
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
        <Route path="/characters_events" component={Characters_events}/>
        <Route path="/characters" component={Characters}/>
        <Route path="/series" component={Series}/>
        <Route path="/comics" component={Comics}/>
        </Switch>
    </Router>
    
)}
  export default Routes