import express, { Router } from "express";
import {
  addClasse,
  classeById,
  deleteClasse,
  editClasse,
  getAllClasse,
} from "../controller/classeController.js";

const classeRouter = express.Router();

classeRouter.post("/classe", addClasse);
classeRouter.delete("/classe/:id", deleteClasse);
classeRouter.get("/classe", getAllClasse);
classeRouter.put("/classe/:id", editClasse);
classeRouter.get("/classe/:id", classeById);

export default classeRouter;
