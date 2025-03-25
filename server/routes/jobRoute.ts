import express from "express";
import { openDB } from "../db";
import { getAllJobs } from "../controllers/jobController";
import { param, query, body } from "express-validator";

const router = express.Router();

router.get("/", getAllJobs);

export default router;
