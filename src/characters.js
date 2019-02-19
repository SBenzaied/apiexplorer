import React from 'react';
import './characters.css';
 
 
 const Characters = (props)=> {
  console.log(props)
        return (
          <div className="characters">   

                <div class="nom">
                        <h1> {props.location.state.name}</h1>
                </div>

                        

                    <div class="image">
                        <section id="image">
                        
                            <img class="frame-img" alt="" title={props.location.state.image}
                            src={props.location.state.image}
                            width="550" height="845"></img>
                        </section>
                    </div>

                    <div class="description">
                            <h1> {props.location.state.description}</h1>
                        </div>
          
          </div>
        )
      }

 
 export default Characters