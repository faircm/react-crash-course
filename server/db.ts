import sqlite3 from "sqlite3";
import { open } from "sqlite";

let dbInstance: any = null;

export const openDB = async () => {
  if (!dbInstance) {
    dbInstance = await open({
      filename: "./jobs.db",
      driver: sqlite3.Database,
    });

    dbInstance.configure("busyTimeout", 6000);
  }
  return dbInstance;
};

export const closeDB = async () => {
  if (dbInstance) {
    await dbInstance.close();
    dbInstance = null;
  }
};
