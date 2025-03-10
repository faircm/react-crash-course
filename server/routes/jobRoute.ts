import express from "express";
import { body, validationResult } from "express-validator";
import { getAllJobs } from "../controllers/jobController";

const router = express.Router();

router.get("/", getAllJobs);

export default router;
