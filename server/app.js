const express = require("express");
const router = require("./routers");
const app = express();
const { connect } = require("./models/connector");

connect();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(4000);
