import { useEffect, useState } from "react";
import { Link } from "react-router";

function Series() {
  const [series, setSeries] = useState<Serie[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/series`)
      .then((response) => response.json())
      .then((series) => setSeries(series));
  }, []);

  return (
    <>
      <h1>Series page</h1>
      <ul className="btnContainer">
        {series.map((serie) => (
          <li key={serie.id}>
            <Link to={`/series/${serie.id}`} className="menuBtn">
              {serie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Series;
