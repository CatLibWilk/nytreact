import React from "react";

const Article = ({title, date, url, children}) => (
  <div className="col-4 mb-3 mt-3">
    <div className="card text-center article-div">

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{date}</p>
        <a href={url} target="_blank" className="card-text">{url}</a>
      {children}
      </div>
    </div>
  </div>
);

export default Article;
