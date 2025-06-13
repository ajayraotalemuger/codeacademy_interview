require('dotenv').config();
require("./db");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use("/api", require("./routes"));

app.listen(port, () => {
    console.log("app listening on port ", port);
});