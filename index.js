import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import profRouter from "./route/profRoute.js";
import matRouter from "./route/matRoute.js";
import classeRouter from "./route/classeRoute.js";
import niveauRouter from "./route/niveauRoute.js";
import edtRouter from "./route/edtRoute.js";
import generateRouter from "./route/generateEdtRoute.js";

const app = express();

const connect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/generate-edt");
    console.log("connected");
  } catch (err) {
    throw err;
  }
};

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.use("/api", profRouter);
app.use("/api", matRouter);
app.use("/api", classeRouter);
app.use("/api", niveauRouter);
app.use("/api", edtRouter);
app.use("/api", generateRouter);

app.listen(5000, () => {
  connect();
  console.log(`server connect at https://localhost:5000}`);
});
