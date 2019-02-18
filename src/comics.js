import React from 'react';
 
 
 const Comics = (props)=> {
  console.log(props)
        return (
          <div className="comics">   

                <div class="titre">
                            <h1>Titre : {props.location.state.title}</h1>
                        </div>

                        <div class="description">
                            <h1>Description: {props.location.state.description}</h1>
                        </div>

                        <div class="page">
                            <h1>Nombre de page : {props.location.state.nbPage}</h1>
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