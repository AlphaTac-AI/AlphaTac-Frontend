import React from 'react';
import { Link } from 'react-router-dom';
import './index.less';

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="logo-container">
          <div className="logo" />
          <Link to="/">AlphaTac AI</Link>
        </div>
        <div className="link">
          <Link to="/about">About</Link>
          <Link to="/product">Product</Link>
          <Link to="/team">Team</Link>
          <Link to="/join">Join</Link>
        </div>
      </div>
    </div>
  )
};

export default Header;
