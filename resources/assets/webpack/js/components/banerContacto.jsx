import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import Logo from '../../img/Javier/javier-psicologo-cuadrado.jpg';

const BanerContacto = (props) => (
  <div className="w-100 py-5 bg-light">
    <div className="container shadow-sm py-4 bg-white py-lg-2">
      <div className="row align-items-center justify-content-around">
        <div className="col-3 mb-4 mb-lg-0 col-lg-1 d-flex flex-column align-items-center justify-content-center px-1">
          <img
            src={Logo}
            alt="Foto de Javier"
            className="img-fluid rounded-circle"
          />
        </div>
        <div className="col-12 col-lg-5 mb-4 mb-lg-0">
          <h3 className="text-center mb-0">
            <Typewriter
              options={{
                strings: [props.text1],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
          <h5 className="text-center mb-0">{props.text2}</h5>
        </div>

        <div className="col-12 col-lg-3 mb-2 mb-lg-0">
          <Link to="/contactar">
            <div className="btn btn-outline-primary btn-lg  w-100 text-uppercase">
              Contactar
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default BanerContacto;
