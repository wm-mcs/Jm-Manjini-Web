import React, { useState, useEffect } from 'react';
import Axios from 'axios';
const SectionBlog = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [loadMore, setLoadMore] = useState(true);
  const [idsYaUsados, setIdsYaUsados] = useState([]);

  const fetcData = () => {
    if (!loadMore) {
      return 'hola';
    }

    return Axios.get('https://psicologojaviermangini.com.uy/get_blogs', {
      ide_ya_cargados: idsYaUsados,
    })
      .then(function (response) {
        let data = response.data;
        if (data.Data.length == 0) {
          setLoadMore(false);
        } else {
          setBlogs(blogs.concat(data.Data));
        }

        setLoading(false);
      })
      .catch(function (error) {
        setLoading(false);
        console.log(error.message);
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
