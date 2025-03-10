"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var cors_1 = require("cors");
var db_ts_1 = require("./db.ts");
var jobRoute_ts_1 = require("./routes/jobRoute.ts");
var app = (0, express_1.default)();
app.use(express_1.default.json());
// Routes
app.use("/jobs", jobRoute_ts_1.default);
try {
    db_ts_1.default.sync({ force: false });
    console.log("DB Synced");
}
catch (err) {
    console.log("Sync error", err);
}
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.listen(5000, function () {
    console.log("server listening on port 5000");
});
