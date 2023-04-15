const express = require("express");
const app = express();
const cors = require("cors");


app.use(express.json());

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:tru
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));


app.get("/test", (req, res) => {
  res.send("hello node server");
});

app.listen(5000, () => {
  console.log("listening port from 8000");
});