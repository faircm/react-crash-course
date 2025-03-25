import { openDB } from "../db";

export const getAllJobs = async (req, res) => {
  try {
    const db = await openDB();
    const jobs = await db.all("SELECT * FROM job");
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
