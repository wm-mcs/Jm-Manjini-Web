import React, { useState, useEffect } from 'react';

const SectionBlog = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [loadMore, setLoadMore] = useState(true);
  const [idsYaUsados, setIdsYaUsados] = useState([]);

  const fetcData = async () => {
    if (!loadMore) {
      return 'hola';
    }

    try {
      const response = await fetch(
        'https://psicologojaviermangini.com.uy/get_blogs',
        {
          method: 'POST',
          body: JSON.stringify({ ide_ya_cargados: idsYaUsados }),

          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );

      const content = await response.json();

      if (!response.ok) {
        console.log('Hola');
        throw Error('Error al conectar a la API');
      } else {
        if (content.Data.length == 0) {
          setLoadMore(false);
        } else {
          setBlogs(blogs.concat(content.Data));
        }
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
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
