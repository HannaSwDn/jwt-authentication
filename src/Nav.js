import React, { useContext } from 'react';
import { CentralContext } from './CentralContext';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  const [items, setItems] = useContext(CentralContext);

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
          <li>
            { `Number of items: ${ items.length }` }
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
