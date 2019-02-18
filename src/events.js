import React from 'react';
 
 
 const Events = (props)=> {
  
        return (
          <div className="Events">   

                <div class="titre">
                            <h1>Titre : {props.location.state.title}</h1>
                        </div>

                        <div class="description">
                            <h1>Description: {props.location.state.description}</h1>
                        </div>

                        <div class="start">
                            <h1>Année de début : {props.location.state.start}</h1>
                        </div>
                        <div class="end">
                            <h1>Année de fin : {props.location.state.end}</h1>
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

 
 export default Events