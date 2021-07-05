import React from 'react'
//import { BrowserRouter as Router } from 'react-router-dom'
 


const Home = ()=> {
    
  return (
           
    <> 
      <main>
        <div className="container-fluid">
          <div className="row">
            
            <div className="col-7">
              <h2><b>Elsewhere here</b></h2>
              <br></br>
              <p id="aesoppara">Introducing Othertopias: three fragnances from elsewhere</p>
            </div>
            <div className="col-md">
              <img className="img-fluid" src="../car1.webp" alt="car1" width="60%" height="60%" />
            </div>
          </div>
        </div>

        <div className="container-fluid">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner ">
    <div className="carousel-item active">
      <img src="../car1.webp" className="img  md lg " alt="../car1.webp"/>
      <img src="../car1.webp" className="img " alt="../car1.webp"/>
     </div> 
    <div className="carousel-item">
      <img src="../car2.webp" className="img sm md lg " alt="../car2.webp"/>
    </div>
  
    <div className="carousel-item ">
      <img src="../car3.webp" className="img sm md lg " alt="../car3.webp"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </div>
    </main>   
 

    </> 
    )
}

export default Home
