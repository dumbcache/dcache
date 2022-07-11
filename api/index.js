import express from "express";
import morgan from "morgan";
// import fs from "fs";

const app = express();
const port = 8080;
// const logStream = fs.createWriteStream("dcache.log", {
//   flags: "a",
// });

app.use(morgan("combined"));

app.all("/", (_, res) => {
  res.send("server working");
});

app.listen(port, () => {
  console.log(`server listening at ${port}`);
});
