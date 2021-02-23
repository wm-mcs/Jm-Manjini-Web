import React from 'react';
import { Link } from 'react-router-dom';

const Blog = (props) => {
  const Post = props.blog;
  return (
    <div className="col-6 col-lg-3 mb-4 px-2">
      <div className="w-100 shadow">
        <img
          className="blog-card-img"
          src={Post.url_img_portada_chica}
          alt={`Foto del post ${Post.name}`}
        />
        <div className="w-100 py-4 p-3">
          <h5 className="card-title">{`${Post.name.slice(0, 30)} ...`}</h5>
          <p className="card-text" />
          <a href="/" className="btn btn-primary">
            Leer más
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
