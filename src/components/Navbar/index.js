import './index.css';
import React, { useState, useEffect } from 'react';

// Import assets
import LogoNetflix from '../../assets/images/logo/logo-netflix.png';
import UserDefault from '../../assets/images/users/user-default.png';

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <nav className={`navbar ${show && 'navbar--black'}`}>
      <img 
        className="navbar__logo"
        src={LogoNetflix} 
        alt="Netflix Logo" 
      />

      <img 
        className="navbar__avatar"
        src={UserDefault} 
        alt="User Default" 
      />
    </nav>
  );
}

export default Navbar;
