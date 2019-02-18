import React from 'react';
import './characters.css';
 
 
 const Characters = (props)=> {
  console.log(props)
        return (
          <div className="creators">   

                <div class="titre">
                            <h1>Nom : {props.location.state.name}</h1>
                        </div>

                        <div class="titre">
                            <h1>description : {props.location.state.description}</h1>
                        </div>

                    <div class="image">
                        <section id="image">
                        
                            <img class="frame-img" alt="" title={props.location.state.image}
                            src={props.location.state.image}
                            width="550" height="845"></img>
                        </section>
                    </div>
          
          </div>
        )
      }

 
 export default Characters