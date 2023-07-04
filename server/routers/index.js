const express = require("express");
const router = express.Router();

const todoRouter = require("./todo");
const userRouter = require("./auth");
const chatRouter = require("./chat");

router.use("/todo", todoRouter);
router.use("/auth", userRouter);
router.use("/chat", chatRouter);

module.exports = router;
