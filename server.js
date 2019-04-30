const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const authConfig = require("./auth_config.json");

const app = express();
const port = 8080;

if (!authConfig.domain || !authConfig.audience) {
  throw "Please make sure that auth_config.json is in place and populated";
}

app.use(morgan("dev"));
app.use(helmet());

app.get("/api/ping", (req, res) => {
  res.send({
    msg: "Your access token was successfully validated!"
  });
});

app.listen(port, () => console.log(`API listening on port ${port}`));
