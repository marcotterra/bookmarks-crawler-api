import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes";

dotenv.config();

mongoose.connect(
  process.env.DB_URI,
  { useNewUrlParser: true }
);

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/", router);

app.listen(process.env.PORT || 3000, () => {
  console.log("Rodando na porta 3000");
});
