import React from 'react';
import { useParams, Link } from 'react-router-dom';
import DefaultLayout from '../components/layout';

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
          setBlogs(data.Data);
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
      <h2>Blog {Id}</h2>
    </DefaultLayout>
  );
};

export default BlogIndividual;
