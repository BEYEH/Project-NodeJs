var fs = require("fs");
const path = require("path");

const currentPath = __dirname;
const filePath = path.join(currentPath, "mynewfile2.txt");

fs.writeFile(filePath, " This is the changed text.", function (err) {
  if (err) throw err;
  console.log("Updated!");
});
