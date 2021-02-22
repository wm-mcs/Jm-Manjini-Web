import React, { useState, useEffect } from 'react';

const SectionBlog = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [loadMore, setLoadMore] = useState(true);
  const [idsYaUsados, setIdsYaUsados] = useState([]);

  const fetcData = async () => {

    if(!loadMore){
        return console.log('Ya se pidío todo');
    }

    try {
      const response = await fetch(
        'https://psicologojaviermangini.com.uy/get_blogs',
        {
          method: 'POST',
          body: JSON.stringify({ ide_ya_cargados: idsYaUsados }),
        }
      );

      const content = await response.json();

      if (response.status !== 200) {
        throw Error('Error al conectar a la API');
      } else {
        setBlogs(blogs.concat(content.Data));

        if(content.Data,length == 0){
            setLoadMore(false);
        }
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetcData();
  }, []);

  return (
    <section className="w-100 py-5">
      <div className="container d-flex flex-column align-items-center"></div>
    </section>
  );
};

export default SectionBlog;
