import { Outlet, Link } from "react-router-dom";
import React, {  useState } from 'react';

const Layout = () => {
  return (
    <>
    <Navbar />
      <Outlet />
    </>
  )
};

function Navbar () {
  const [menuOpen, setMenuOpen] = useState(false);
  return <nav className="navbar">
    <a className="navbar-logo"><Link to="/">Highly Classified LLC</Link></a>
    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
      <span className={menuOpen ? 'bar open' : 'bar'}></span>
      <span className={menuOpen ? 'bar open' : 'bar'}></span>
      <span className={menuOpen ? 'bar open' : 'bar'}></span>
    </div>
      <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
        <li><a href="#about" onClick={() => setMenuOpen(false)}><Link to="/about">About</Link></a></li>
        <li><a href="#shows" onClick={() => setMenuOpen(false)}><Link to="/performances">Performances</Link></a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}><Link to="/contact">Contact</Link></a></li>
      </ul>
  </nav>;
}

export default Layout;
