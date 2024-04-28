var fs = require("fs");
const path = require("path");

const currentPath = __dirname;
const filePath = path.join(currentPath, "mynewfile4.txt");

fs.writeFile(
  filePath,
  "hello test 4",
  function (err) {
    if (err) throw err;
    console.log("saved");
  }
);