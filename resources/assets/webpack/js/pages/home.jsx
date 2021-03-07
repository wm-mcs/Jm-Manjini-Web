import React, { useState, useEffect, useRef } from 'react';

import DefaultLayout from '../components/layout';
import Baner from '../components/baner';
import BanerContacto from '../components/banerContacto';
import Section1 from '../components/sectionHome1';
import SectionBlog from '../components/sectionBlog';
import Data from '../config/data';

const Home = () => {
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);
  const [muestra, setMuestra] = useState(false);
  const [sectionBlogComponente, setSectionBlogComponente] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 600 && sectionBlogComponente == null) {
        const componente = (
          <SectionBlog cantidad="4" evitarIds="''">
            {' '}
            <h2 className="mb-5 text-center ">Mi blog</h2>
            <p className="col-12 text-center mb-5">
              Artículos que pueden ayudarte mientras te decidís a contactarme
            </p>
          </SectionBlog>
        );
        setSectionBlogComponente(componente);
      }

      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [goingUp]);

  useEffect(() => {
   
    // Update the document title using the browser API
    document.title = `Psicólogo en Montevideo Javier Mangini`;
  });

  return (
    <DefaultLayout>
      <Baner />
      <Section1 />
      <BanerContacto text1="Contactame ahora mismo" text2="¡Sin compromiso!" />
      {sectionBlogComponente != false ? sectionBlogComponente : ''}
      <BanerContacto
        text1="Llamá cuando quieras"
        text2={`Mi celular es ${Data.cellphone}`}
      />
    </DefaultLayout>
  );
};

export default Home;
