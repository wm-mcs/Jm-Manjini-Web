import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = lazy(() => import("../pages/home"));
const Contacto = lazy(() => import("../pages/contacto"));

const App = () => {
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/contactar" component={Contacto} />
				</Switch>
			</Suspense>
		</Router>
	);
};

export default App;
