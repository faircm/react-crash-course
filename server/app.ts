import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import sequelize from "./db.ts";
import jobRoute from "./routes/jobRoute.ts";

const app = express();
app.use(express.json());

// Routes
app.use("/jobs", jobRoute);

try {
  sequelize.sync({ force: false });
  console.log("DB Synced");
} catch (err) {
  console.log("Sync error", err);
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.listen(5000, () => {
  console.log("server listening on port 5000");
});
