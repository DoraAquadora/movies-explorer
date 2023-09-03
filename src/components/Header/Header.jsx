import React from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  const location = useLocation();

  return (
    <header
      className={`header ${
        location.pathname === '/' ? 'header_type_main' : ''
      }`}
    >
      <Navigation />
    </header>
  );
};

export default Header;
