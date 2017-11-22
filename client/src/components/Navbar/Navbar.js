import React from "react";
import "./Navbar.css"

const Navbar = () => (
  <div className="container-fluid text-center">
    <div className="row">
      <div id="navbar" className="col">
        <h1>NYT Article Scrubber</h1>
        <p>Note: Search functionality does not work for any article before 2014. This will be fixed in a future update.</p>
      </div>
    </div>
  </div>
);

export default Navbar;
