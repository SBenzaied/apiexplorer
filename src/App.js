import React from 'react';
import './App.css';
import Suggestions from './Suggestion'
import characters from './components/characters'
import comics from './components/comics'
import creators from './components/creators'
import events from './components/events'
import series from './components/series'
import stories from './components/stories'
import Navigation from './components/Navigation'
import axios from 'axios'
import {BrowserRouter, Route,Switch} from "react-router-dom"


const API_KEY = "055211f04433158edb47811e0135b554";
const HASH = "de858e129a6d31c17bc1157985f52817"
const API_URL = 'http://gateway.marvel.com/v1/public/'




class App extends React.Component {
  state = {
    query: '',
    results: []
  }

  getInfo = (routes) => {
    console.log (routes)
    fetch(`${API_URL+routes}?nameStartsWith=${this.state.query}&ts=1&apikey=${API_KEY}&hash=${HASH}`)
      .then(response => response.json())
      .then(data => this.setState({ 
        results: data.data ? data.data.results : [] }));   
  }

 /* 
console.log (routes)
    fetch(`${API_URL+routes}?nameStartsWith=${this.state.query}&ts=1&apikey=${API_KEY}&hash=${HASH}`)
      .then(response => response.json())
      .then(data => console.log(data && data.data&& data.data.results));  
 */

 

 /* getInfo = () => {
    axios.get(`${API_URL}?nameStartsWith=${this.state.query}&ts=1&apikey=${API_KEY}&hash=${HASH}`)
      .then(({ data }) => {
        this.setState({
          results: data.data.results 
                                                     
        })
      })
  }*/

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } 
    })
  }

  render() {
    return (
      <div className="App">   
      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
        
      </form>

      <BrowserRouter>
      <div>
      <Navigation/>
      <Switch>
          <Route path="characters" component={characters} >{this.getInfo("characters")}</Route>
          <Route path="comics" component={comics}></Route>
          <Route path="creators" component={creators}></Route>
          <Route path="events" component={events}></Route>
          <Route path="series" component={series}></Route>
          <Route path="stories" component={stories}></Route>
      </Switch>
      </div>
</BrowserRouter> 

      </div>

      
    )
  }
}

export default App


/*<BrowserRouter>

          <Route path="/characters" component={characters}></Route>
          <Route path="/comics" component={comics}></Route>
          <Route path="/creators" component={creators}></Route>
          <Route path="/events" component={events}></Route>
          <Route path="/series" component={series}></Route>
          <Route path="/stories" component={stories}></Route>

      </BrowserRouter> */