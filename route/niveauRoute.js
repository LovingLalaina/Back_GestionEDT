import express, { Router } from "express";
import {
  addNiveau,
  deleteNiveau,
  editNiveau,
  getAllNiveau,
  niveauById,
} from "../controller/niveauController.js";

const niveauRouter = express.Router();

niveauRouter.post("/niveau", addNiveau);
niveauRouter.delete("/niveau/:id", deleteNiveau);
niveauRouter.get("/niveau", getAllNiveau);
niveauRouter.put("/niveau/:id", editNiveau);
niveauRouter.get("/niveau/:id", niveauById);

export default niveauRouter;
