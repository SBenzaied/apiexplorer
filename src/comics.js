import React from 'react';
import './comics.css';
 
 const Comics = (props)=> {
  console.log(props)
        return (
          <div className="comics">   

                <div class="titre">
                            <h1>{props.location.state.title}</h1>
                        </div>
                        
                        <div class="description">
                            <h1>{props.location.state.description}</h1>
                            <h1>{props.location.state.nbPage} page(s)</h1>
                        </div>

                        <div class="page">
                            
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

 
 export default Comics