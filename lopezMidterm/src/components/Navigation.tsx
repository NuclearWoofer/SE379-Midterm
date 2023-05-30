import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '10px', color: '' }}>
        <li>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" activeClassName="active">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/checkout" activeClassName="active">
            Checkout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
