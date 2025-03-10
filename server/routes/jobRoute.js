"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var jobController_1 = require("../controllers/jobController");
var router = express_1.default.Router();
router.get("/", jobController_1.getAllJobs);
exports.default = router;
