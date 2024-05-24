import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import profRouter from "./route/profRoute.js";
import matRouter from "./route/matRoute.js";
import classeRouter from "./route/classeRoute.js";
import niveauRouter from "./route/niveauRoute.js";

const app = express();

const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/generate-edt");
    console.log("connected");
  } catch (err) {
    throw err;
  }
};

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.use("/api/gestionEcole", profRouter);
app.use("/api/gestionEcole", matRouter);
app.use("/api/gestionEcole", classeRouter);
app.use("/api/gestionEcole", niveauRouter);

app.listen(5000, () => {
  connect();
  console.log(`API deploye`);
});
