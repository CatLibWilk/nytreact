import React from "react";
import { PromiseProvider } from "mongoose";

const Article = ({title, date, url, children}) => (
  <div className="col-4">
    <div className="card text-center">
      {/* <img className="card-img-top" src=".../100px180/" alt="Card image cap"></img> */}
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
