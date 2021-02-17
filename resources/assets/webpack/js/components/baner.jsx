import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

import Foto from "./../../img/Javier/javier-mangini-radio.jpg";

const Baner = props => {
	return (
		<section className="w-100 py-5">
			<div className="container d-flex flex-column align-items-center">
				<h1 className="mb-5 text-center decoracionHeaders">
					Javier Manjini psicólogo en Montevideo
				</h1>
				<div className="col-12 row mx-0 align-items-center  ">
					<div className="col-12 col-lg-6  px-2 mb-4 mb-lg-0">
						<div className="col-12  p-3 ">
							<img
								className="img-fluid shadow p-1"
								src={Foto}
								alt="Foro de Javier Mangini en la radio"
							/>
						</div>
					</div>
					<div className="col-12 col-lg-6 px-2">
						<p>
							Soy licenciado en Psicología, Psicoanalista; Ex-Docente de la
							UdelaR.
							<strong>
								Doy consultas privadas en el centro de Montevideo o por video
								llamadas.
							</strong>
						</p>
						<p>
							Si sentís que algo no funciona bien en tu vida, que necesitás un
							cambio o estás afrontando una situación difícil, déjame
							acompañarte.
						</p>

						<p>
							Es bueno que sepas que no utilizo una única metodología para
							entenderte y ayudarte. Como cada persona es única, la forma de
							ayudar también tiene que serlo.
						</p>
						<p>
							Mi principal objetivo es poder ofrecerte una terapia personalizada
							que se adapte a tus necesidades.
						</p>
						<h3>
							<Typewriter
								options={{
									strings: ["Si querés que te ", "Mi celular es "],
									autoStart: true,
									loop: true
								}}
							/>
						</h3>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Baner;
