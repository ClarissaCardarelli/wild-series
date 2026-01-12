import { Link } from "react-router";

function Home() {
  return (
    <>
      <h1>Wild Séries</h1>
      <ul className="btnContainer">
        <li>
          <Link to="/series" className="menuBtn">
            Voir toutes les séries
          </Link>
        </li>
        <li>
          <Link to="/categories" className="menuBtn">
            Voir toutes les catégories
          </Link>
        </li>
        {/* <li>
          <Link to="/programs" className="menuBtn">
            Voir tous les séries
          </Link>
        </li>
        <li>
          <Link to="/categories" className="menuBtn">
            Voir tous les catégories
          </Link>
        </li> */}
      </ul>
    </>
  );
}

export default Home;
