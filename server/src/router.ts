import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here

// Define category-related routes
import categoryActions from "./modules/category/categoryActions";

router.get("/api/categories", categoryActions.browse);
router.get("/api/categories/:id", categoryActions.readById);

/* ************************************************************************* */

import serieActions from "./modules/serie/serieActions";

router.get("/api/series", serieActions.browseSeries);
router.get("/api/series/:id", serieActions.readById);

export default router;
