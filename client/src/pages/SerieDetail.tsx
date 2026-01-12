import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SerieDetail() {
  const { id } = useParams();
  const [serie, setSerie] = useState(null as null | Serie);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/series/${id}`)
      .then((response) => response.json())
      .then((data: Serie) => {
        setSerie(data);
      });
  }, [id]);

  return (
    serie && (
      <>
        <h1>{serie.title}</h1>
        <div>
          <p>{serie.synopsis}</p>
          <img src={serie.poster} alt={serie.title} />
        </div>
        {/* <Link to={`/programs/${program.id}/edit`}>Modifier</Link>
        <ProgramDeleteForm id={program.id}>Supprimer</ProgramDeleteForm> */}
      </>
    )
  );
}

export default SerieDetail;
