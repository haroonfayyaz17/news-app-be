const fs = require("fs");
const path = require("path");

module.exports = (app) => {
  fs.readdirSync(__dirname).forEach((file) => {
    if (path.basename(__filename) !== file) require(`./${file}`)(app);
  });
};
