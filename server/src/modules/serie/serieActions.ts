import serieRepository from "./serieRepository";

import type { RequestHandler } from "express";

const browseSeries: RequestHandler = async (req, res, next) => {
  try {
    const series = await serieRepository.readAll();
    res.json(series); // 200 is implied and empty array ok too
  } catch (err) {
    next(err);
  }
};

const readById: RequestHandler = async (req, res, next) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      res.sendStatus(400); // bad rquest
    }

    const serie = await serieRepository.read(id);

    if (!serie) {
      res.sendStatus(404);
    }

    res.json(serie);
  } catch (err) {
    next(err);
  }
};

// Export it to import it somewhere else

export default { browseSeries, readById };
