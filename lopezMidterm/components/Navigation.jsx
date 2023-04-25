import { NavLink } from 'react-router-dom';


function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" activeClassName="active">
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
