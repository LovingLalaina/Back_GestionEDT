import express, { Router } from "express";
import {
  addMat,
  deleteMat,
  editMat,
  getAllMat,
  matById,
} from "../controller/matiereController.js";

const matRouter = express.Router();

matRouter.post("/mat", addMat);
matRouter.delete("/mat/:id", deleteMat);
matRouter.get("/mat", getAllMat);
matRouter.put("/mat/:id", editMat);
matRouter.get("/mat/:id", matById);

export default matRouter;
