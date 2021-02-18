import React, { useState, useEffect } from "react";

import DefaultLayout from "../components/layout";
import Baner from "../components/baner";
import BanerContacto from "../components/banerContacto";
const Home = () => {
	return (
		<DefaultLayout>
			<Baner />
			<BanerContacto/>
		</DefaultLayout>
	);
};

export default Home;
