import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="w-100 ">
    <div className="w-100 py-5">
      <div className="container">
        <div className="row">
          <nav className="col-6">
            <a className="ml-3" href="">
              ¿Quién es Javier Mangini?
            </a>
            <a className="ml-3" href="">
              Blog de Javier Mangini
            </a>
            <a className="ml-3" href="">
              Hablar con Javier Mangini
            </a>
          </nav>
          <div className="col-6"></div>
        </div>
      </div>
    </div>
    <div className="w-100 py-3 bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center text-white mb-0">
              <small>
                Javier Mangini psicólogo psicoanalista en Montevideo © todos los
                derechos reservados {`${new Date().getFullYear()}`} |{' '}
                <a href="https://mwebs.com.uy/dise%C3%B1o-web-uruguay">
                  Diseño web en Uruguay
                </a>{' '}
                hecho por por{' '}
                <a href="https://mwebs.com.uy/dise%C3%B1o-web-uruguay">mwebs</a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
