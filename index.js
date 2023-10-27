require("dotenv/config");
const express = require("express");
const cors = require("cors")
const morgan = require("morgan");
const { EXPRESS_PORT } = process.env;

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
require("./routes")(app);


app.get("/*", (_, res) =>
  res
    .status(404)
    .json({ error: "no resource found for given url", success: false })
);

app.listen(EXPRESS_PORT, () => {
  console.log("Server listening at port: ", EXPRESS_PORT);
});
