import React from 'react';
import Skeleton from 'react-loading-skeleton';

const loaderPage = () => (
  <div className="w-100">
    <div className="container d-flex flex-column align-items-center">
      <div className="col-12 row mx-0 align-items-center py-4">
        <div className="col-2   d-flex flex-column align-items-center justify-content-center px-1">
          <Skeleton circle height={80} width={80} />
        </div>
        <div className="col-10">
          <p className="mb-0">
            <small>
              <Skeleton count={2} />
            </small>
          </p>
        </div>
      </div>
      <div className=" col-12 row align-items-center">
        <div className="col-12 mb-5 mb-lg-0 col-lg-6 d-flex flex-column align-items-center justify-content-center">
          <Skeleton circle={false} height={200} width={200} />
        </div>
        <div className="col-12 mb-5 mb-lg-0 col-lg-6">
          <Skeleton count={10} />
        </div>
      </div>

      <div className=" col-12 row ">
        <h3>
          <Skeleton count={3} />
        </h3>
        <h3>
          <Skeleton count={3} />
        </h3>
      </div>
    </div>
  </div>
);

export default loaderPage;
