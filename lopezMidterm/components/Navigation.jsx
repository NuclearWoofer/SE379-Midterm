import { NavLink } from 'react-router-dom';


function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/Home" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Products" activeClassName="active">
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
