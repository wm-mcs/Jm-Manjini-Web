import React, { useEffect } from 'react';
import { FaMobileAlt, FaWhatsapp, FaEnvelopeOpenText } from 'react-icons/fa';
import DefaultLayout from '../components/layout';
import FormularioContacto from '../components/formularioContacto';
import Data from '../config/data';

const Contacto = () => {
  useEffect(() => {
    if (window.scrollY != 0) {
      window.scrollTo(0, 0);
    }
    // Update the document title using the browser API
    document.title = `Contactar a Javier Mangini`;
  });
  return (
    <DefaultLayout>
      <div className="container">
        <h1 className=" text-center my-5">¿Hablamos?</h1>
        <h2 className="h2 text-center my-5">
          Podés contactarte conmigo de 3 maneras diferentes.
        </h2>

        <ol>
          <li className="mb-4">
            {' Llamame ahora mismo a mi celular '}
            {<FaMobileAlt />}

            <strong>{` ${Data.cellphone}`}</strong>
            {`. Ten en cuenta que si no te atiendo es porque estoy en una consulta. Te
          devolveré el llamado ni bien pueda. `}
          </li>

          <li className="mb-4">
            {' Enviame un mensaje de texto a mi celular '}
            {<FaMobileAlt />}

            <strong>{` ${Data.cellphone}`}</strong>
            {`.  o por Whatsapp tocando
          este botón `}
            <a href={Data.whatsapp_link} className="btn btn-success">
              {` Enviar mensaje por whatsapp `}
              {<FaWhatsapp />}
            </a>
          </li>

          <li className="mb-4">
            {' Enviame un email '}
            {<FaEnvelopeOpenText />}
            {' a '}
            <strong>{` ${Data.email}`}</strong>

            {` o bien rellená el
          formulario de aquí abajo. `}
          </li>
        </ol>
      </div>

      <FormularioContacto />
    </DefaultLayout>
  );
};

export default Contacto;
