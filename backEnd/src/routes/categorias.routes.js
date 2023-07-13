import express from "express";

const router = express.Router();

import { getAll, getOne } from "../controllers/categoria.controllers.js";

router.get("/all",getAll);
router.get("/:id",getOne);


export default router;
