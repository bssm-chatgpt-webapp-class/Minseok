const express = require("express");
const router = express.Router();
const { getConnection } = require("../models/connector.js");
const jwt = require("jsonwebtoken");

router.post("/signin", async function (req, res) {
    const { email, pw } = req.body;
    await getConnection().execute(`insert into user(email, pw) values(?, ?)`, [
        email,
        pw,
    ]);
    return res.json("success");
});

router.post("/signin", async function (req, res) {
    const { email, pw } = req.body;
    const [results] = await getConnection().execute(
        `select * from user where email = ? and pw = ?`,
        [email, pw]
    );

    if (results.length === 0) {
        return res.json("no user");
    }

    const token = jwt.sign({ email }, "secret");

    res.json(token);
});

module.exports = router;
