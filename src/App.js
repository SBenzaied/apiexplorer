import React from 'react';
import './App.css';
import Suggestions from './Suggestion'
import axios from 'axios'

const API_KEY = "055211f04433158edb47811e0135b554";
const HASH = "de858e129a6d31c17bc1157985f52817"

const apikey2 ="7c0c6031ef13fb296f6352bee4ad2b5b"
const hash2 = "f1329715b881eced242d4ef5c11e2785"

const API_BASE_URL = 'http://gateway.marvel.com/v1/public/'
const LIMITE = "limit"
const NB_LIMIT = "10"
const OFFSET = "offset"
let NB_OFFSET = 0



class App extends React.Component {
  state = {
    query: '',
    results: [],
    totalResult:0,
    filter:'characters',
    clickResearch:false
  }

  getInfo = () => {
    //console.log("je veux voir ",`${API_BASE_URL}${this.state.filter}?nameStartsWith=${this.state.query}&ts=1&apikey=${API_KEY}&hash=${HASH}&${LIMITE}=${NB_LIMIT}&${OFFSET}=${NB_OFFSET}`)
    fetch(`${API_BASE_URL}${this.state.filter}?nameStartsWith=${this.state.query}&ts=1&apikey=${apikey2}&hash=${hash2}&${LIMITE}=${NB_LIMIT}&${OFFSET}=${NB_OFFSET}`)
      .then(response => response.json())
      .then(data => this.setState({ 
        results: data.data.results,
        totalResult:data.data.total  }));   
  }

  getInfoResearch = () => {
    //console.log("je veux voir ",`${API_BASE_URL}${this.state.filter}?nameStartsWith=${this.state.query}&ts=1&apikey=${API_KEY}&hash=${HASH}&${LIMITE}=${NB_LIMIT}&${OFFSET}=${NB_OFFSET}`)
    fetch(`${API_BASE_URL}${this.state.filter}?ts=1&apikey=${apikey2}&hash=${hash2}&${LIMITE}=${NB_LIMIT}&${OFFSET}=${NB_OFFSET}`)
      .then(response => response.json())
      .then(data => this.setState({ 
        results: data.data.results,
        totalResult:data.data.total  }));   
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
      query: this.search.value,
      clickResearch:false
  
    }, () => {
      if (this.state.query && this.state.query.length >= 1) {
          NB_OFFSET = 0
          this.getInfo()
      } 
    })
  }

  increaseOffsetByTen(){
    NB_OFFSET = NB_OFFSET + 10
  }

  decreaseOffsetByTen(){
    NB_OFFSET = NB_OFFSET - 10
  }

   onChangeFilter = (event) => {
     console.log(event)
    this.setState({
      filter: event,
    })
  }

   onClickNext = () => {
    if(NB_OFFSET + 10 < this.state.totalResult){
        this.increaseOffsetByTen()
        console.log(this.state.clickResearch)
        if(this.state.clickResearch){
          this.getInfoResearch()
        }else {
          this.getInfo()
        }
        
      }
   }
   onClickResearch = () => {
    this.resetResearchBar()
    this.setState({
      clickResearch: true,
      query:''
    })
      this.getInfoResearch()
   }

   onClickPrevious = () => {
      if(NB_OFFSET>0){
        this.decreaseOffsetByTen()
        if(this.state.clickResearch){
          this.getInfoResearch()
        }else {
          this.getInfo()
        }
        
      }
  }

  resetResearchBar = () => {
    document.getElementById("researchBar").value = ""
}

  

  render() {
    
    return (
      <div className="App">   
      <form>
        <input id="researchBar"
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <Filter onChangeFilter={this.onChangeFilter} value={this.state.filter}/>
        <SearchButton onClickResearch = {this.onClickResearch}/>
        

        <Suggestions results={this.state.results} />
        <NavButton onClickNext = {this.onClickNext}
                   onClickPrevious = {this.onClickPrevious}/>
        
      </form>
      </div>
    )
  }
}

 const Filter= (props) =>{
  console.log("test " ,props.onChangeFilter)
  return (
    <select name="filter" onChange = {e =>props.onChangeFilter(e.target.value) } value={props.value}>
	        <option value="characters">characters</option>
	        <option value="comics">comics</option>
	        <option value="creators">creators</option>
          <option value="events">events</option>
	        <option value="series">series</option>
	        <option value="stories">stories</option>
        </select>
  
  );
}

 function NavButton(props) {
  return (
    <div >
      <PreviousButton onClickPrevious={props.onClickPrevious} />
      <NextButton onClickNext={props.onClickNext} />
    </div>
  );
}

function SearchButton(props) {
  return (
    <button type="button" onClick={props.onClickResearch}>
      Rechercher
    </button>
  );
}
function PreviousButton(props) {
  return (
    <button id = "prevBtnId" type="button" onClick={props.onClickPrevious} >
      précédent
    </button>
  );
}
function NextButton(props) {
  return (
    <button id = "nextbtnId" type="button" onClick={props.onClickNext}>
      Suivant
    </button>
  );
}

export default App
