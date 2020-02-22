import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="Nav">
      <nav>
        <h1>Navigation</h1>

        <ul>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/confidential'>
            <li>Confidential stuff</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
