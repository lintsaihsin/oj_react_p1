import React, { Component } from 'react'

const NavBar = ({totalCounters}) => {
  console.log('NavBar - Rendered');
  return (
    <nav className="navbar navbar-expand-md navbar-light ">
      <a href="#" className="navbar-brand " >
        Navbar
        <span className="badge badge-pill badge-secondary m-2">
          {totalCounters}
        </span>
      </a>
        <button
          className = "navbar-toggler"
          type = "button"
          data-bs-toggle="collapse"
          data-bs-target="#toggleMobileMenu"
          aria-controls="toggleMobileMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="toggleMobileMenu">
          <ul className = "navbar-nav mr-auto mt-2 mt-lg-0" >
            <li>
              <a className="nav-link" href="#">price</a>
            </li>
            <li>
              <a className="nav-link" href="#">feature</a>
            </li>
            <li>
              <a className="nav-link" href="#">contact</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      
    </nav>
  );
};
 
export default NavBar;