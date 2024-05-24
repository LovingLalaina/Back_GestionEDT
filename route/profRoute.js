import express, { Router } from "express";

import {
  addProf,
  deleteProf,
  editProf,
  getAllProf,
  profById,
} from "../controller/profController.js";

const profRouter = express.Router();

profRouter.post("/prof", addProf);
profRouter.delete("/prof/:id", deleteProf);
profRouter.get("/prof", getAllProf);
profRouter.put("/prof/:id", editProf);
profRouter.get("/prof/:id", profById);

export default profRouter;
