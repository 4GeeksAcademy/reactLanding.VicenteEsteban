import React from "react";


const NavBar = () => {
    return (
        
    <nav className="navbar navbar-expand-lg bg-body-tertiary  bg-dark  justify-content-center">
          <div className="container-fluid col-8">
            <a className="navbar-brand text-white" href="#">Salta montañas</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
              <div className="navbar-nav">
                  <a className="nav-link active text-white" aria-current="page" href="#">Inicio</a>
                  <a className="nav-link text-white-50" href="#">Sobre nosotros</a>
                  <a className="nav-link text-white-50" href="#">Servicio</a>
                  <a className="nav-link text-white-50" href="#">Contacto</a>
              </div>
            </div>
          </div>
    </nav>	
    )
    }

    export default NavBar;
