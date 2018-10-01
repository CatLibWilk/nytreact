import React from "react";

const Navbar = (props) => (

    <nav className="navbar navbar-light bg-light mb-3">
        <a className="navbar-brand" href="#">
            <img src="https://i.imgur.com/JlB57SY.jpg" width="30" height="30" alt=""></img>
        </a>
        {props.children}
    </nav>

  );
  
  export default Navbar;
  