import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLink from './SignedInLinks';
import SignedOutLink from './SignedOutLinks';

const Navbar = () => {
  return (
    <nav className='nav-wrapper grey darken-3'>
      <div className='container'>
        <Link to='/'>MarioPlan</Link>
        <SignedInLink />
        <SignedOutLink />
      </div>
    </nav>
  );
};

export default Navbar;
