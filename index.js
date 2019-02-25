const express = require("express");
const app = express();

const PORT = 4000;

const handleListening = () => {
  console.log(`Listening on: http://localhost: ${PORT}`);
};

const handleMain = (req, res) => {
  console.log(req);
  res.send("This is main page");
};

app.get(`/`, handleMain);

app.listen(PORT, handleListening);
