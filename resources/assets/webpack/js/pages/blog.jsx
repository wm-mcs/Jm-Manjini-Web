import React, { useEffect } from 'react';
import DefaultLayout from '../components/layout';
import SectionBlog from '../components/sectionBlog';

const Contacto = () => {
  useEffect(() => {
    if (window.scrollY != 0) {
      window.scrollTo(0, 0);
    }
    // Update the document title using the browser API
    document.title = `Blog del psicólogo Javier Mangini`;
  });

  return (
    <DefaultLayout>
      <SectionBlog cantidad="8">
        {' '}
        <h1 className="my-5 text-center decoracionHeaders">Mi blog</h1>
        <p className="col-12 text-center mb-5">
          Escribo con el fin de enseñarte sobre las cuestiones más comunes que
          sufren los seres humanos hoy en día. Además te doy tips para que
          puedas tener un vida plena.
        </p>
      </SectionBlog>
    </DefaultLayout>
  );
};

export default Contacto;
