import React, { useState } from 'react';

const formularioContacto = () => {
  const [values, setValues] = useState({
    name: '',
    nameValidation: '',
    email: '',
    emailValidation: '',
    celular: '',
    celularValidation: '',
  });

  const rules = {
    name: /[A-Za-z0-9]{6,}/,
    email: /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/,
    celular: /[0-9]{9,}/,
  };

  const [submitted, setSubmitted] = useState(false);

  const handlerChange = (event) => {
    const target = event.target;

    console.log(target);
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    const nameValidatio = `${name}Validation`;

    setValues((prevState) => ({
      ...prevState,
      [nameValidatio]: rules.name.test(value),
    }));

    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-100 my-5  d-flex flex-column align-items-center">
      <div className="container row mx-0 bg-light p-1 p-lg-5">
        <h3 className="col-12 mb-4">Formulario de contacto</h3>
        <div>
          <div>{values.name}</div>
          <div>{values.email}</div>
          <div>{values.celular}</div>
        </div>

        <div className="col-6 mb-4">
          {values.nameValidation === false && (
            <div>Escribí un nombre correcto</div>
          )}
          <fieldset className="float-label ">
            <input
              name="name"
              autoComplete="off"
              type="text"
              className="form-control"
              value={values.name}
              onChange={handlerChange}
            />
            <label htmlFor="name">Nombre</label>
          </fieldset>
        </div>
        <div className="col-6">
          <fieldset className="float-label">
            <input
              name="email"
              type="text"
              className="form-control"
              value={values.email}
              onChange={handlerChange}
            />
            <label htmlFor="email">Email</label>
          </fieldset>
        </div>
        <div className="col-6">
          <fieldset className="float-label">
            <input
              name="celular"
              type="text"
              className="form-control"
              value={values.celular}
              onChange={handlerChange}
            />
            <label htmlFor="celular">Celular</label>
          </fieldset>
        </div>

        <div className="col-6">
          <a href="" className="btn btn-block btn-lg btn-primary">
            Submit
          </a>
        </div>
      </div>
    </div>
  );
};

export default formularioContacto;
