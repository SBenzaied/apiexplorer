import React from 'react';
import './creators.css'
 
 const Creators = (props)=> {
  console.log(props)
        return (
          <div className="creators">   

                <div class="fullName">
                            <h1>{props.location.state.name}</h1>
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

 
 export default Creators