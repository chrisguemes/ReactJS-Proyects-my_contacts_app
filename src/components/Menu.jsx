import { Link } from "react-router-dom"

const Menu = () => {
    return (
      <nav>
        <ul>
          <li><Link className="link" to="/">Inicio</Link></li>
          <li><Link className="link" to="/contacts">Contacts</Link></li>
          <li><Link className="link" to="/about">About</Link></li>
        </ul>
      </nav>
    );
}

// Exports
export default Menu;
