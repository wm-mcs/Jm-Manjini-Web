import React from 'react';

import Typewriter from 'typewriter-effect';
import Data from '../config/data';

import Foto from '../../img/Javier/javier-mangini-radio.jpg';

const Baner = () => (
  <section className="w-100 py-5">
    <div className="container d-flex flex-column align-items-center">
      <h1 className="mb-5 text-center decoracionHeaders text-wrap">
        Javier Mangini psicólogo en Montevideo
      </h1>
      <div className="col-12 row mx-0 align-items-center  ">
        <div className="col-12 col-lg-6  px-2 mb-4 mb-lg-0">
          <div className="col-12  p-3 ">
            <img
              className="img-fluid shadow p-1"
              src={Foto}
              alt="Foro de Javier Mangini en la radio"
            />
          </div>
        </div>
        <div className="col-12 col-lg-6 px-2">
          <p>
            Soy licenciado en psicología, psicoanalista y ex docente de la
            UdelaR.
            {` `}
            <b className="text-bold">
              Doy consultas privadas en el centro de Montevideo o por video
              llamadas.
            </b>
          </p>
          <p>
            Si sentís que algo no funciona bien en tu vida, que necesitás un
            cambio o estás afrontando una situación difícil, déjame acompañarte.
          </p>

          <p>
            <strong>
              Es bueno que sepas que no utilizo una única metodología para
              entenderte y ayudarte
            </strong>
            . Como cada persona es única, la forma de ayudar también tiene que
            serlo.
          </p>
          <p>
            Mi principal objetivo es poder ofrecerte una terapia personalizada
            que se adapte a tus necesidades.
          </p>
          <h3 className="">
            <Typewriter
              options={{
                strings: [
                  '¿Querés hablar conmigo?',
                  `Llamame o enviame un mensaje a mi celular ${Data.cellphone}`,
                  `${Data.cellphone}`,
                  `${Data.cellphone}`,
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
        </div>
      </div>
    </div>
  </section>
);

export default Baner;
