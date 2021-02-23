import React, { useState, useEffect } from 'react';
import Blog from './blog';

const SectionBlog = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [loadMore, setLoadMore] = useState(true);

  const blogsYaIterados = blogs.map((blog, index) => (
    <Blog blog={blog} key={blog.id} />
  ));

  const fetcData = () => {
    if (!loadMore) {
      return console.log('se cargaron todos');
    }

    let idsYaUsados = blogs.map((obj) => obj.id);

    idsYaUsados = idsYaUsados.length > 0 ? idsYaUsados.join() : 1;

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
        const data = responseAsJson;
        if (data.Data.length === 0 || data.Validation === false) {
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
        <h2 className="mb-5 text-center ">Mi blog</h2>
        <p className="col-12 text-center mb-5">
          Artículo que pueden ayudarte mientras te decidís a contactarme.
        </p>
        <div className="row">{blogsYaIterados}</div>
      </div>
    </section>
  );
};

export default SectionBlog;
