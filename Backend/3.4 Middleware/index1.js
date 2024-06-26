import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));//all the paths
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // console.log(__dirname + "/public/index.html"); relative to your local computer
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit",(req,res)=>{//same as form action in index.html
  console.log(req.body);
})