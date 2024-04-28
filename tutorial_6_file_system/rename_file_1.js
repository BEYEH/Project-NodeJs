var fs = require("fs");
const path = require("path");

const currentPath = __dirname;
const filePath = path.join(currentPath, "mynewfile3.txt");

const renamedFilePath = path.join(currentPath, "myrenamedfile.txt");

fs.rename(filePath, renamedFilePath, function (err) {
  if (err) throw err;
  console.log("File Renamed!");
});
