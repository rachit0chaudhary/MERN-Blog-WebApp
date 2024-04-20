import express from "express";
const app = express();

import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("db is connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("app is listen on 3000");
});
