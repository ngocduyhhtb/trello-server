import express from "express";
import { mapOrder } from "./utilities/sorts.js";
const app = express();

const hostName = "localhost";
const PORT = 5000;

app.get("/", (req, res) => {
  res.end("<h1>Hello World</h1><hr/>");
});

app.listen(PORT, hostName, () => {
  console.log(`Server was running at ${hostName}:${PORT}`);
});
