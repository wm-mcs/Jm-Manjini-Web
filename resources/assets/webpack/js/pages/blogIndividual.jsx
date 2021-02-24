import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import DefaultLayout from '../components/layout';
import SectionBlog from '../components/sectionBlog';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const BlogIndividual = () => {
  const Id = useParams().id;
  const [blog, setBlog] = useState(null);

  const [loading, setLoading] = useState(false);

  const fetcData = () => {
    setLoading(true);

    return fetch(`https://psicologojaviermangini.com.uy/get_blog_id?id=${Id}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response.json();
      })
      .then((responseAsJson) => {
        const data = responseAsJson;
        if (data.Validation === false) {
        } else {
          setBlog(data.Data);
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log('Algo raro pasó: \n', error);
      });
  };

  useEffect(() => {
    if (window.scrollY != 0) {
      window.scrollTo(0, 0);
    }
    fetcData();
  }, [Id]);

  return (
    <DefaultLayout>
      <div className="container d-flex flex-column align-items-center">
        <div className="col-12 col-lg-10 my-4 shadow-sm p-2 p-lg-5  bg-white rounded">
          {loading && (
            <div className="w-100 mb-5 ">
              <div className="w-100 mb-5 ">
                <Skeleton count={4} />
              </div>

              <div className="w-100 mb-5 ">
                <Skeleton count={4} />
              </div>

              <div className="w-100 mb-5 ">
                <Skeleton count={4} />
              </div>
            </div>
          )}

          {!loading && <h2> {Id}</h2>}
        </div>
      </div>

      <SectionBlog cantidad="4" evitarIds={Id}>
        {' '}
        <h2 className="mb-5 text-center ">Más artículos relacionados</h2>
        <p className="col-12 text-center mb-5">
          Artículos que pueden ayudarte mientras te decidís a contactarme
        </p>
      </SectionBlog>
    </DefaultLayout>
  );
};

export default BlogIndividual;
