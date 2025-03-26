import express from "express";
import { param, body } from "express-validator";
import {
  getAllJobs,
  getJobById,
  createNewJob,
  updateJob,
  deleteJob,
} from "../controllers/jobController";

const router = express.Router();

router.get("/", getAllJobs);

router.get(
  "/:id",
  [
    param("id")
      .trim()
      .escape()
      .notEmpty()
      .isNumeric()
      .withMessage("Invalid job ID."),
  ],
  getJobById
);

router.post(
  "/",
  [
    body("title")
      .exists()
      .isString()
      .escape()
      .trim()
      .notEmpty()
      .withMessage("Invalid title"),
    body("type")
      .exists()
      .isString()
      .escape()
      .trim()
      .notEmpty()
      .withMessage("Invalid type"),
    body("location")
      .exists()
      .isString()
      .escape()
      .trim()
      .notEmpty()
      .withMessage("Invalid location"),
    body("description")
      .exists()
      .isString()
      .escape()
      .trim()
      .notEmpty()
      .withMessage("Invalid description"),
    body("salary")
      .exists()
      .isString()
      .escape()
      .trim()
      .notEmpty()
      .withMessage("Invalid salary"),
    body("companyName")
      .exists()
      .isString()
      .escape()
      .trim()
      .notEmpty()
      .withMessage("Invalid company name"),
    body("companyDescription")
      .exists()
      .isString()
      .escape()
      .trim()
      .notEmpty()
      .withMessage("Invalid company description"),
    body("contactEmail")
      .exists()
      .isString()
      .trim()
      .isEmail()
      .notEmpty()
      .withMessage("Invalid email address"),
    body("contactPhone")
      .exists()
      .isString()
      .escape()
      .trim()
      .notEmpty()
      .withMessage("Invalid phone number"),
  ],
  createNewJob
);

router.put(
  "/",
  [
    body("id")
      .exists()
      .escape()
      .trim()
      .notEmpty()
      .isNumeric()
      .withMessage("Invalid id"),
    body("title")
      .exists()
      .isString()
      .escape()
      .trim()
      .notEmpty()
      .withMessage("Invalid title"),
    body("type")
      .exists()
      .isString()
      .escape()
      .trim()
      .notEmpty()
      .withMessage("Invalid type"),
    body("location")
      .exists()
      .isString()
      .escape()
      .trim()
      .notEmpty()
      .withMessage("Invalid location"),
    body("description")
      .exists()
      .isString()
      .escape()
      .trim()
      .notEmpty()
      .withMessage("Invalid description"),
    body("salary")
      .exists()
      .isString()
      .escape()
      .trim()
      .notEmpty()
      .withMessage("Invalid salary"),
    body("companyName")
      .exists()
      .isString()
      .escape()
      .trim()
      .notEmpty()
      .withMessage("Invalid company name"),
    body("companyDescription")
      .exists()
      .isString()
      .escape()
      .trim()
      .notEmpty()
      .withMessage("Invalid company description"),
    body("contactEmail")
      .exists()
      .isString()
      .trim()
      .isEmail()
      .notEmpty()
      .withMessage("Invalid email address"),
    body("contactPhone")
      .exists()
      .isString()
      .escape()
      .trim()
      .notEmpty()
      .withMessage("Invalid phone number"),
  ],
  updateJob
);

router.delete(
  "/:id",
  [
    param("id")
      .trim()
      .escape()
      .notEmpty()
      .isNumeric()
      .withMessage("Invalid job ID."),
  ],
  deleteJob
);
export default router;
