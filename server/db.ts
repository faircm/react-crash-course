import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./sqlite/jobs.db",
  logging: console.log,
});

export default sequelize;
