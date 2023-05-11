import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '10px', color: '' }}>
        <li>
          <NavLink exact to="/" activeclassname="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Products" activeclassname="active">
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
