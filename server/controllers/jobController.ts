import { openDB } from "../db";

export const getAllJobs = async (req, res) => {
  try {
    const db = await openDB();
    const jobs = await db.all("SELECT * FROM job");

    if (jobs.length > 0) {
      res.status(200).json(jobs);
    } else {
      res.status(204);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getJobById = async (req, res) => {
  try {
    const db = await openDB();
    const job = await db.all(`SELECT * FROM job WHERE id = ${req.params.id}`);
    if (job) {
      res.status(200).json(job);
    } else {
      res.status(400).json(`Job with id ${req.params.id} not found.`);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const createNewJob = async (req, res) => {
  try {
    const db = await openDB();
    const newJob = await db.all(
      `INSERT INTO job 
      VALUES (NULL,
      '${req.body.title}',
      '${req.body.type}', 
      '${req.body.location}', 
      '${req.body.description}', 
      '${req.body.salary}', 
      '${req.body.companyName}', 
      '${req.body.companyDescription}', 
      '${req.body.contactEmail}', 
      '${req.body.contactPhone}')`
    );

    console.log(newJob);

    if (newJob) {
      res.status(200).json(newJob);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateJob = async (req, res) => {
  try {
    const db = await openDB();
    const updatedJob = await db.all(
      `UPDATE job
      SET 
      title = ${req.body.title},
      type = ${req.body.type},
      location = ${req.body.location},
      description = ${req.body.description},
      salary = ${req.body.salary},
      companyName = ${req.body.companyName},
      companyDescription = ${req.body.companyDescription},
      contactEmail = ${req.body.contactEmail},
      contactPhone = '${req.body.contactPhone}'
      WHERE id = ${req.body.id}`
    );

    if (updatedJob) {
      res.status(200).json(updatedJob);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteJob = async (req, res) => {
  try {
    const db = await openDB();
    const deletedJob = await db.all(
      `DELETE from job WHERE id = ${req.params.id};`
    );

    if (deletedJob) {
      res.status(200).json(deletedJob);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
