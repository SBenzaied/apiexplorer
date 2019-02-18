import React from 'react';
import './App.css';
import Suggestions from './Suggestion'
import ReactLoading from 'react-loading';


const API_KEY = "055211f04433158edb47811e0135b554";
const HASH = "de858e129a6d31c17bc1157985f52817"

const apikey2 ="7c0c6031ef13fb296f6352bee4ad2b5b"
const hash2 = "f1329715b881eced242d4ef5c11e2785"

const API_BASE_URL = 'http://gateway.marvel.com/v1/public/'
const LIMITE = "limit"
const NB_LIMIT = "10"
const OFFSET = "offset"
let NB_OFFSET = 0
let filter = ""





class App extends React.Component {
  state = {
    query: '',
    results: [],
    totalResult:0,
    filter:localStorage.getItem("filter") ? localStorage.getItem("filter") : 'characters',
    clickResearch:false,
    isLoading:true
    
  }

  componentDidMount(){
    if(!this.state.clickResearch){
      this.getInfoResearch();
    }else {   
      this.getInfo();
    }
    this.saveCurrentFilterAndOffset()
    
  }

  getInfo = () => {
    
    
    fetch(`${API_BASE_URL}${this.state.filter}?${filter}=${this.state.query}&ts=1&apikey=${apikey2}&hash=${hash2}&${LIMITE}=${NB_LIMIT}&${OFFSET}=${NB_OFFSET}`)
      .then(response => response.json())
      .then(data => this.setState({ 
        results: data.data.results,
        totalResult:data.data.total, isLoading:false  }));   
  }

  getInfoResearch = () => {
    fetch(`${API_BASE_URL}${this.state.filter}?ts=1&apikey=${apikey2}&hash=${hash2}&${LIMITE}=${NB_LIMIT}&${OFFSET}=${NB_OFFSET}`)
      .then(response => response.json())
      .then(data => this.setState({ 
        results: data.data.results,
        totalResult:data.data.total,
        isLoading:false
        }));   
  }

  handleInputChange = () => {
    switch(this.state.filter){
      case "characters":
      case "events":
        filter = "nameStartsWith"
    break
    case "comics":
    case "series":
    
  filter = "titleStartsWith"
    break
    case "creators":
      filter = "nameStartsWith"
      break
    }
    this.setState({
      query: this.search.value,
      clickResearch:false,
      isLoading:true
  
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
   
    this.setState({
      
      filter: event,
      clickResearch:true,
      isLoading:true
    }, () =>
      (this.resetResearchBarAndNbOffset(),
      this.getInfoResearch() ,this.saveCurrentFilterAndOffset())
    )  
  }

   onClickNext = () => {
    if(NB_OFFSET + 10 < this.state.totalResult){
        this.increaseOffsetByTen()
        this.setState({
          isLoading:true
        })
        if(this.state.clickResearch){
          this.getInfoResearch()
        }else {
          this.getInfo()
        }
        
      }
   }
   

   onClickPrevious = () => {
      if(NB_OFFSET>0){
        this.decreaseOffsetByTen()
        this.setState({
          isLoading:true
        })
        if(this.state.clickResearch){
          this.getInfoResearch()
        }else {
          this.getInfo()
        }
        
      }
  }

  resetResearchBarAndNbOffset = () => {
    document.getElementById("researchBar").value = "";
    NB_OFFSET = 0
}
saveCurrentFilterAndOffset(){
  localStorage.setItem("filter",this.state.filter)
  localStorage.setItem("offset",NB_OFFSET)
} 

setCurrentFilterAndOffset(){
  this.setState({
   filter:localStorage.getItem("filter")
  })
  NB_OFFSET = localStorage.getItem("offset")
  
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
        {this.state.isLoading ?
        <ReactLoading type="spin" color="#a34e4e" height={667} width={375} />
        :<Suggestions results={this.state.results} filter={this.state.filter}  />}
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
