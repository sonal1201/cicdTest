import express from "express";
import { client } from "@repo/db/client";

import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    Message: "hello",
  });
});

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = await client.user.create({
    data: {
      username: username,
      password: password,
    },
  });


  res.json({
    message: "Sign up Successfully",
  });
});

app.listen(3002);
