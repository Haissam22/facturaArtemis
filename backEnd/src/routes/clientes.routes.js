import express from "express";

const router = express.Router();

import { deletClient, getAll, getOne, insertClient, updateClient } from "../controllers/clientes.controllers.js";

router.get("/all",getAll);
router.get("/:id",getOne);
router.patch("/upd/:id",updateClient);
router.delete("/:id",deletClient);
router.post("/add",insertClient);

export default router;