import express, { Application, Request, Response } from "express";
import fs from "fs";

const app: Application = express();

app.use(express.json());

app.post("/", (req: Request, res: Response) => {
  const { firstName, lastName } = req.body;
  const pathName = `${firstName}_${lastName}.txt`;
  fs.writeFile(pathName, JSON.stringify(req.body), (err) => {
    res.status(201).json({
      code: 201,
      status: "User Created",
    });
  });
});

const port = 3000;

app.listen(port, () => {
  console.log("App running");
});
