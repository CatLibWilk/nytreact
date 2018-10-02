import React from "react";
import { PromiseProvider } from "mongoose";


const Article = ({title, date, url, children}) => (
  <div className="col-4 mb-3 mt-3">
    <div className="card text-center">

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{date}</p>
        <p className="card-text">{url}</p>
      {children}
      </div>
    </div>
  </div>
);

export default Article;
