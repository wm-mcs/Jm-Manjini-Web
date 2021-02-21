import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoaderPage from './loaderPage';
import ErrorWrapper from './error';

const Home = lazy(() => import('../pages/home'));
const Contacto = lazy(() => import('../pages/contacto'));

const App = () => (
  <Router>
    <Suspense fallback={<LoaderPage />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <ErrorWrapper>
          <Route exact path="/contactar" component={Contacto} />
        </ErrorWrapper>
      </Switch>
    </Suspense>
  </Router>
);

export default App;
