const express = require("express");
const router = express.Router();

const todoRouter = require("./todo");
const userRouter = require("./auth");

router.use("/todo", todoRouter);
router.use("/auth", userRouter);

module.exports = router;
