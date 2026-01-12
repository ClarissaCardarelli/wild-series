import { Link } from "react-router";

function Nav() {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1 className="logo">Wild Series</h1>
      </Link>
      <ul>
        <li>
          <Link to="/categories">Catégories</Link>
        </li>
        <li>
          <Link to="/series">Séries</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
