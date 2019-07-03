import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (  
        <div className="header">
        <div className="container">
        <div className="logo">
          <h1>
            <Link to="/">
              <b>
                T<br />
                <br />H<br />
                <br />E
              </b>
              &nbsp;Wondem Store<span>The Best Supermarket</span>
            </Link>
          </h1>
        </div>
        <div className="head-t">
          <ul className="card1">
            <li>
              <Link to="/">
                <i className="fa fa-home"  aria-hidden="true" />
                Home
              </Link>
            </li>
            <li>
              <Link to="/Login">
                <i className="fa fa-user" aria-hidden="true" />
                Login
              </Link>
            </li>
            <li>
              <Link to="/Register">
                <i className="fa fa-arrow-right" aria-hidden="true" />
                Register
              </Link>
            </li>
            <li>
              <Link to="/About">
                <i className="fa fa-file-text-o" aria-hidden="true" />
                About
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <i className="fa fa-shopping-cart" aria-hidden="true" />
                My Cart
              </Link>
            </li>
          </ul>
        </div>

        <div className="header-ri">
          <ul className="social-top">
            <li>
              <a href="https://www.facebook.com/samuel.wondem" className="icon facebook">
                <i className="fa fa-facebook" aria-hidden="true" />
                <span />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/samuel-wondem" className="icon twitter">
                <i className="fa fa-linkedin" aria-hidden="true" />
                <span />
              </a>
            </li>
            <li>
              <a href="https://github.com/wondem12" className="icon pinterest">
                <i className="fa fa-github" aria-hidden="true" />
                <span />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/samuel_wondem/" className="icon dribbble">
                <i className="fa fa-instagram" aria-hidden="true" />
                <span />
              </a>
            </li>
          </ul>
        </div>
      </div>
      </div>
    );
}
 
export default NavBar;