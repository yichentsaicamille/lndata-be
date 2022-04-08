const express = require("express");
require("dotenv").config();
const connection = require("./utils/db");
const { readFile } = require("fs/promises");
let app = express();

app.use((req, res, next) => {
  console.log("在所有路由中間件的後面 -> 404");
  res.status(404).send("Not Found");
});
app.use((err, req, res, next) => {
  console.log("最後錯誤處理中間件", err);
  res.status(500).send("Server 錯誤: 請洽系統管理員");
});

const port = process.env.SERVER_PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
