import React from 'react';
import './App.css';
import Suggestions from './Suggestion'
import axios from 'axios'

const API_KEY = "055211f04433158edb47811e0135b554";
const HASH = "de858e129a6d31c17bc1157985f52817"
const API_URL = 'http://gateway.marvel.com/v1/public/characters'


class App extends React.Component {
  state = {
    query: '',
    results: []
  }

  getInfo = () => {
    fetch(`${API_URL}?nameStartsWith=${this.state.query}&ts=1&apikey=${API_KEY}&hash=${HASH}`)
      .then(response => response.json())
      .then(data => this.setState({ 
        results: data.data.results  }));   
  }

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
      
      </div>
    )
  }
}

export default App


