const express = require("express");
const router = express.Router();
const { getConnection } = require("../models/connector.js");

let database = [{ id: 1, todo: "할 일1" }];
let currentId = 1;

router.get("/", async function (req, res) {
    const results = await getConnection().execute(`select * from todo`);
    res.json(results[0]);
});

router.post("/", async (req, res) => {
    const data = req.body;
    await getConnection().execute(
        `insert into todo(todo, completed) values(?, ?)`,
        [data.todo, 0]
    );
    return res.json("success");
});

router.put("/:id", async (req, res) => {
    const id = Number(req.params.id);
    const { todo, completed } = req.body;
    await getConnection().execute(
        `update todo set todo = ?, completed = ? where id = ?`,
        [todo, completed, id]
    );
    return res.json("success");
});

router.delete("/:id", async (req, res) => {
    const id = Number(req.params.id);
    await getConnection().execute(`delete from todo where id = ?`, [id]);
    return res.json("success");
});

module.exports = router;
