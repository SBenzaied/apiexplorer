import React from 'react';
import './characters.css';
 
 
 const Characters = (props)=> {
  console.log(props)
        return (
          <div className="creators">   

                <div class="titre">
                            <h1>Nom : </h1>
                        </div>

                        <div class="description">
                            <h2>description : </h2>
                        </div>

                    <div class="image">
                        <section id="image">
                        
                            <img class="frame-img" alt="" title=""
                            src=""
                            width="550" height="845"></img>
                        </section>
                    </div>
          
          </div>
        )
      }

 
 export default Characters