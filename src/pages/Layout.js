import { Outlet, Link } from "react-router-dom";
import React, {  useState } from 'react';
import '../styles/Navigation.css';

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

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <Link className="navbar-logo" to="/">
          Highly Classified LLC
        </Link>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`menu-overlay ${menuOpen ? "show" : ""}`}
        onClick={closeMenu}
      />

      {/* Slide-out Menu */}
      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/performances" onClick={closeMenu}>Performances</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </aside>
    </>
  );
}

export default Layout;