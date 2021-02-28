import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/components/error.scss';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div className="error-contenedor bg-secondary w-100">
          <h1 className="col-12 text-white">Whoops!! </h1>
          <p className="col-12  text-white mb-5">¡Algo salió mal!</p>
          <div className="col-12 ">
            <Link to="/">
              <button className="btn btn-outline-primary btn-lg">
                Regresar a inicio
              </button>
            </Link>
          </div>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

export default ErrorBoundary;
