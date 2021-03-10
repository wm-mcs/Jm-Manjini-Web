import React, { useEffect } from 'react';

import DefaultLayout from '../components/layout';
import Imagen from '../../img/Javier/quien-soy-javier-mangini.jpg';
import Data from '../config/data';
import { Link } from 'react-router-dom';

const SobreMi = () => {
  useEffect(() => {
    if (window.scrollY != 0) {
      window.scrollTo(0, 0);
    }
    document.title = `Sobre Javier Mangini`;
  });

  return (
    <DefaultLayout>
      <div className="container">
        <h1 className="text-center col-12 my-5">Javier Mangini</h1>

        <div className="row mx-0">
          <div className="col-12 px-2 px-4">
            <p className="mb-5">
              Si estás en esta página, seguramente sea por una de estas dos
              razones:
            </p>
            <ol>
              <li className="mb-3">
                Querés verificar que el terapeuta que te va a tratar sea alguien
                en quien puedas confiar.
              </li>
              <li className="mb-5">
                Tenés curiosidad por conocer un poco más sobre mí.
              </li>
            </ol>
            <p className="mb-4">
              Si estás en el primer grupo, se me ocurre que, la mejor manera de
              aclarar tus dudas es que tengas una conversación conmigo. Para eso
              llamame a mi celular <strong>{Data.cellphone}</strong> o{' '}
              <Link className="" to="/contactar">
                envíame un mensaje
              </Link>{' '}
              y en cuestión de minutos estaremos en contacto.
            </p>
            <p className="mb-5">
              Si estás en el segundo grupo, acá está mi{' '}
              <a href={Data.facebook_link}>Facebook</a> e{' '}
              <a href={Data.instagram_link}>Instagram</a> (no los actualizo
              mucho) y <Link to="/blog">mi blog</Link>.
            </p>
          </div>
        </div>
      </div>

      <div className="w-100 my-5 py-5 bg-light">
        <div className="container  py-4 py-lg-2">
          <div className="col-12 row justify-content-center">
            <div className="col-11 col-lg-8 shadow px-0">
              <img className="img-fluid" src={Imagen} alt="Javier Mangini" />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SobreMi;
