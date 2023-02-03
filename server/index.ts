import { NextFunction, Request, Response } from "express";
import * as handler from "./spreadsheet";
const path = require('path');
const express = require("express");
const forceSSL = require('express-force-ssl');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use(function(req: Request, res: Response, next: NextFunction) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
});

app.use(bodyParser.json());

app.get("/api", (req: Request, res: Response) => {
  res.json({ message: "Hello from server!" });
});

app.post("/api/submit", async (req: Request, res: Response) => {
  // res.send(req.body);
  await handler.sheetHandler(req.body, res);
})

app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});