import React from "react";
import { Link } from "react-router-dom";


const Navbar = (props) => (

<nav className="navbar navbar-expand-lg navbar-light bg-light">
<Link to={"/"}>
  <a className="navbar-brand" href="#">Home</a>
</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link to={"/saved"}>
        <a className="nav-link" href="#">Saved <span className="sr-only">(current)</span></a>
      </Link>
      </li>
      
    </ul>
    
  </div>
</nav>

  );
  
  export default Navbar;
  