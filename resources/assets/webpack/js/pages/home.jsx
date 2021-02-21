import React from 'react';

import DefaultLayout from '../components/layout';
import Baner from '../components/baner';
import BanerContacto from '../components/banerContacto';
import Section1 from '../components/sectionHome1';

const Home = () => (
  <DefaultLayout>
    <Baner />
    <Section1 />
    <BanerContacto />
  </DefaultLayout>
);

export default Home;
