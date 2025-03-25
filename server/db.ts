import sqlite3 from "sqlite3";
import { open } from "sqlite";

let dbInstance: any = null;
export const openDB = async () => {
  if (!dbInstance) {
    dbInstance = await open({
      filename: "./jobs.db",
      driver: sqlite3.Database,
    });
  }
  return dbInstance;
};
