import express from "express";
import cors from "cors";
import { openDB } from "./db";
import jobRoute from "./routes/jobRoute";

const app = express();
const port = 5000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Access-Control-Allow-Origin", "Content-Type"],
  })
);

openDB().then(() => {
  console.log("DB connection established");
});

app.use("/jobs", jobRoute);

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});
