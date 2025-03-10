"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var sequelize = new sequelize_1.Sequelize({
    dialect: "sqlite",
    storage: "./sqlite/jobs.db",
    logging: console.log,
});
exports.default = sequelize;
