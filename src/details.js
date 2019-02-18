import React from 'react';
import './details.css';
 
 
 class Details extends React.Component {


    render() {
    
        return (
          <div className="details">   

                        <div class="page">

                        <div class="image">
                            <section id="image">
                            
                                <img class="frame-img" alt="Old Man Quill (2019) #1" title="Old Man     Quill (2019) #1" 
                                src="https://i.annihil.us/u/prod/marvel/i/mg/c/10/5c523cdb19b5d/clean.jpg"
                                width="550" height="845"></img>
                            </section>
                        </div>


                        <div class ="text">
                        <section id="titre">
                            <h1>Titre</h1>
                            <p>titre</p>
                        </section>
                        

                        <section id="date_de_publication">

                            <h2>Date de publication</h2>
                            <p>Date de publication</p>

                        </section>


                        <section id="ecrivain">

                            <h2>Ecrivain</h2>
                            <p>Ecrivain</p>
                            
                        </section>


                        <section id="dessinateur">

                            <h2>Dessinateur</h2>
                            <p>Dessinateur</p>

                        </section>


                        <section id="couverture">

                            <h2>1ère de couverture</h2>
                            <p>1ère de couverture</p>

                        </section>


                        <section id="description">

                            <h2>Description</h2>
                            <p>Description</p>

                        </section>
                        </div>


                        </div>
                


          
          </div>
        )
      }
 }
 
 export default Details




