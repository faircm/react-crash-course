import express, { Request, Response } from "express";
import Job from "../models/Job";

export const getAllJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await Job.findAll();

    if (jobs.length > 0) {
      res.status(200).json(jobs);
    } else {
      res.status(204);
    }
  } catch (err) {
    res.status(500).json({ message: "Error fetching jobs", err });
  }
};
