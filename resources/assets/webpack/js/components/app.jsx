import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoaderPage from './loaderPage';
import ErrorWrapper from './error';

const Home = lazy(() => import('../pages/home'));
const Contacto = lazy(() => import('../pages/contacto'));
const Blog = lazy(() => import('../pages/blog'));
const SobreMi = lazy(() => import('../pages/sobreMi'));
const BlogIndividual = lazy(() => import('../pages/blogIndividual'));

const App = () => (
  <Router>
    <Suspense fallback={<LoaderPage />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <ErrorWrapper>
          <Route exact path="/contactar" component={Contacto} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/sobre-mi" component={SobreMi} />
          <Route
            exact
            path="/Publicacion/:name/:id"
            component={BlogIndividual}
          />
        </ErrorWrapper>
      </Switch>
    </Suspense>
  </Router>
);

export default App;
