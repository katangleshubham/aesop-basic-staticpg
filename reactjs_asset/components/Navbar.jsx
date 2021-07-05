import React from 'react'
//import { BrowserRouter as Router } from 'react-router-dom'
 


const Navbar = ()=> {
    return (
       <>
         <header>
             <nav className="navbar navbar-light navbar-expand-md navigation-transparent">
                 <div className="container-fluid">
                     <a className="navbar-brand" href="Aesop">Aesops</a>
                    <button className="navbar-toggler" data-bs-target="#navcol-1" data-bs-toggle="collapse">
                        <span className="visually-hidden">Toggle bar</span>
                        <span className="nav-toggler-icon"></span>
                        
                        </button> 
                     <div id="navcol-1" className="collapse navbar-collapse text-end">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link actove" href="shop" >Shop</a>

                            </li>
                            <li className="nav-item">
                                <a className="nav-link actove" href="Read" >Read</a>

                            </li>
                            <li className="nav-item">
                                <a className="nav-link actove" href="store" >Store</a>

                            </li>
                            <li className="nav-item">
                                <a className="nav-link actove" href="search">Search</a>

                            </li>
                        </ul> 
                         
                    </div>   
                 </div>

             </nav>
         </header>
         </> 
    )
}

export default Navbar
