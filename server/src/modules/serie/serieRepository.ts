import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Serie = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
  category_id: number;
};

class SerieRepository {
  async readAll() {
    // Execute the SQL SELECT query to retrieve all categories from the "category" table
    const [rows] = await databaseClient.query<Rows>("select * from serie");

    // Return the array of categories
    return rows as Serie[];
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from serie where id = ?",
      [id],
    );
    return rows[0] as Serie;
  }
}

export default new SerieRepository();
