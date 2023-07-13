import express from "express";

const router = express.Router();

import { deletEmp, getAll,getOne, insertEmp, updateEmp } from "../controllers/empleado.controllers.js";

router.get("/all",getAll);
router.get("/:id",getOne);
router.post("/add",insertEmp);
router.patch("/upd/:id",updateEmp);
router.delete("/:id",deletEmp);


export default router;