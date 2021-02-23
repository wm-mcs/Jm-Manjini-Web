/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const descriptionComputada = (estaAbierto, description) => {
  const lengthIdeal = 30;
  if (!estaAbierto) {
    return `${description.slice(0, lengthIdeal)} ...`;
  }
  return description;
};

const item = (props) => {
  let [abierto, setAbierto] = useState(props.abierto);
  const [description, setDescription] = useState(props.description);

  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4 ">
      <div
        onClick={() => {
          setAbierto((abierto = !abierto));
        }}
        className={` ${
          abierto ? 'item-contenedor__active' : ''
        }  shadow-sm p-3 bg-light w-100 cursor-pointer item-contenedor `}
      >
        <div className="w-100 d-flex align-items-center justify-content-between mb-3">
          <h3
            className={`${
              abierto ? 'text-secondary' : ''
            }  w-100  font-weight-bold`}
          >
            {props.name}
          </h3>
          <small className={` ${abierto ? 'text-secondary' : ''}`}>
            {abierto ? <FaChevronUp /> : <FaChevronDown />}
          </small>
        </div>

        <h5 className={`${abierto ? '  ' : ''} item-description w-100`}>
          {descriptionComputada(abierto, description)}
        </h5>
      </div>
    </div>
  );
};

export default item;
