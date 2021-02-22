import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const SectionBlog = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [loadMore, setLoadMore] = useState(true);

  const fetcData = () => {
    if (!loadMore) {
      return 'hola';
    }

    let idsYaUsados = blogs.map((obj) => obj.id);

    idsYaUsados = idsYaUsados.join();

    return fetch(
      `https://psicologojaviermangini.com.uy/get_blogs_ids/${idsYaUsados}`
    )
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response.json();
      })
      .then((responseAsJson) => {
        const { data } = responseAsJson;
        if (data.Data.length === 0) {
          setLoadMore(false);
        } else {
          setBlogs(blogs.concat(data.Data));
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log('Looks like there was a problem: \n', error);
      });
  };

  useEffect(() => {
    fetcData();
  }, []);

  return (
    <section className="w-100 py-5">
      <div className="container d-flex flex-column align-items-center">
        <h2 className="mb-5 text-center decoracionHeaders">Mi blog</h2>
        <p className="col-12 text-center">
          Artículo que pueden ayudarte mientras te decidís a contactarme.
        </p>
      </div>
    </section>
  );
};

export default SectionBlog;
