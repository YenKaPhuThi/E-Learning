import React from "react";
import "./style.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <button className="visible-xs">
          <i className="fas fa-bars"></i>
        </button>
        <a href="#" className="logo">
          <img
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
            alt="Udemy Logo"
          />
        </a>
        <div className="visible-md navbar-list">
          <a href="#" className="link">
            Categories
          </a>
          <div className="flex flex-1 input-group ">
            <button>
              <i className="fas fa-search"></i>
            </button>
            <input
              className="form-control"
              placeholder="Search for anything"
            />
          </div>
          <a href="#" className="link">
            Udemy Business
          </a>
          <a href="#" className="link">
            Teach on Udemy
          </a>
          <button>
            <i class="fas fa-cart-plus"></i>
          </button>
          <button className="btn-outline font-bold">Log in</button>
          <button className="btn-dark font-bold">Sign up</button>
          <button className="btn-outline font-bold">
            <i class="fas fa-globe-asia"></i>
          </button>
        </div>
        <div className="visible-xs">
          <button>
            <i className="fas fa-search"></i>
          </button>
          <button>
            <i class="fas fa-cart-plus"></i>
          </button>
        </div>
      </nav>
    </header>
  );
}
