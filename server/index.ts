import express from "express";
import { openDB } from "./db";
import jobRoute from "./routes/jobRoute";

const app = express();
const port = 5000;

app.use(express.json());

openDB().then((db) => {
  console.log("DB connection established");
});

app.use("/jobs", jobRoute);

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});
