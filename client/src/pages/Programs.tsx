import { useEffect, useState } from "react";

interface Serie {
  id: number;
  title: string;
}

function Programs() {
  const [series, setSeries] = useState<Serie[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs`)
      .then((response) => response.json())
      .then((series) => setSeries(series));
  }, []);

  return (
    <>
      <ul>
        {series.map((serie) => (
          <li key={serie.id}>{serie.title}</li>
        ))}
      </ul>
      <h1>Programs page</h1>
    </>
  );
}
export default Programs;
