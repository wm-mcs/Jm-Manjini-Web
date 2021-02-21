import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/Javier/javier-psicologo-cuadrado.jpg';

const Header = (props) => (
  <header id="header-nav" className="w-100 py-2 shadow-sm ">
    <div className="container d-flex flex-column align-items-center">
      <div className="col-12 row mx-0 align-items-center">
        <div className="col-2  col-lg-1 d-flex flex-column align-items-center justify-content-center px-1">
          <Link to="/">
            <img
              src={Logo}
              alt="Foto de Javier"
              className="img-fluid rounded-circle"
            />
          </Link>
        </div>
        <div className="col-5 col-lg-7">
          <h1 className="h5 mb-0"> Psicólogo Javier Mangini </h1>
          <p className="mb-0">
            <small>
              <strong>Montevideo-Uruguay</strong>
            </small>
          </p>
        </div>
        <div className="col-5 col-lg-4">
          <Link to="/contactar">
            <div className="btn btn-outline-secondary btn-lg  w-100 text-uppercase">
              Contactar
            </div>
          </Link>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
