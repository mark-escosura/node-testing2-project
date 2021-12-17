const express = require('express')
const server = express()
const userRouter = require('./users/users-router.js');

server.use(express.json());

server.use("/api/users", userRouter);

server.get("/", (req, res) => {
    res.status(200).json({ api: "up" });
  });

module.exports = server