import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorWrapper from "../components/error";
const Home = lazy(() => import("../pages/home"));
const Contacto = lazy(() => import("../pages/contacto"));

const App = () => {
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					<Route exact path="/" component={Home} />
					<ErrorWrapper>
						<Route exact path="/contactar" component={Contacto} />
					</ErrorWrapper>
				</Switch>
			</Suspense>
		</Router>
	);
};

export default App;
