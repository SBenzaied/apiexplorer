import React from 'react';
import './series.css'
 
 const Series = (props)=> {
  
        return (
          <div className="series">   

                <div class="titre">
                            <h1>{props.location.state.title}</h1>
                        </div>

                        <div class="description">
                            <h1>Année de début : {props.location.state.startYear}</h1>
                            <h1>Année de fin : {props.location.state.endYear}</h1>
                            <h1>Rating : {props.location.state.rating}</h1>
                            <h1>Type : {props.location.state.type}</h1>
                            <h1>{props.location.state.description}</h1>
                        </div>

                        <div class="startYear">
                            
                        </div>
                        <div class="endYear">
                           
                        </div>
                        <div class="rating">
                            
                        </div>
                        <div class="type">
                            
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

 
 export default Series