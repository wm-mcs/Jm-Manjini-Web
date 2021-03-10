import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

import DefaultLayout from '../components/layout';
import SectionBlog from '../components/sectionBlog';

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
          document.title = data.Data.name;
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
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
        <div className="col-12 col-lg-10 my-4 p-2 p-lg-5  bg-white rounded">
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

          {!loading && blog != null && (
            <div>
              <h2 className="text-wrap  text-center mb-5 decoracionHeaders">
                {` ${blog.name} `}
              </h2>
              <div className="p-2 mb-5 shadow-sm ">
                <img
                  className="img-fluid mb-5"
                  src={blog.url_img_portada}
                  alt={`Foto de ${blog.name}`}
                />
                <div
                  className="p-2 p-lg-5 d-flex flex-column align-items-center"
                  dangerouslySetInnerHTML={{ __html: blog.contenido_render }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      {!loading && (
        <SectionBlog cantidad="4" evitarIds={Id}>
          {' '}
          <h2 className="mb-5 text-center ">Más artículos relacionados</h2>
          <p className="col-12 text-center mb-5">
            Artículos que pueden ayudarte mientras te decidís a contactarme
          </p>
        </SectionBlog>
      )}
    </DefaultLayout>
  );
};

export default BlogIndividual;
