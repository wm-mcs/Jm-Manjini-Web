import React, { useState, useEffect, useRef } from 'react';

import DefaultLayout from '../components/layout';
import Baner from '../components/baner';
import BanerContacto from '../components/banerContacto';
import Section1 from '../components/sectionHome1';
import SectionBlog from '../components/sectionBlog';

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

  return (
    <DefaultLayout>
      <Baner />
      <Section1 />
      <BanerContacto />
      {sectionBlogComponente != false ? sectionBlogComponente : ''}
    </DefaultLayout>
  );
};

export default Home;
