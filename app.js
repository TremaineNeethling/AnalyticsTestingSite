const express = require("express");
const path = require("path");

const routes = require("./routes/router");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static(path.join(__dirname, "static")));
app.use("/", routes);

app.listen(port, () =>
  console.log(`analyticstestingsite listening on port ${port}!`)
);
