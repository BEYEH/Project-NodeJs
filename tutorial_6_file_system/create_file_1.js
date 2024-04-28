var fs = require("fs");
const path = require("path");

const currentPath = __dirname;
const filePath = path.join(currentPath, "mynewfile1.txt");

fs.appendFile(
  filePath,
  "Hello content!",
  function (err) {
    if (err) throw err;
    console.log("Saved!");
  }
);
