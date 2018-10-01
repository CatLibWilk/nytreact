import React from "react";

const Article = ({title, date, url, key}) => (
  <div className="col-4">
    <div className="card">
      {/* <img className="card-img-top" src=".../100px180/" alt="Card image cap"></img> */}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{date}</p>
        <p className="card-text">{url}</p>
        <a href="#" data-id={key} className="btn btn-primary">Save</a>
      </div>
    </div>
  </div>
);

export default Article;
