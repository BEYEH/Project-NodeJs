var fs = require('fs');
const path = require("path");

const currentPath = __dirname;
const filePath = path.join(currentPath, "mynewfile2.txt");

fs.unlink(filePath, function (err) {
  if (err) throw err;
  console.log('File deleted!');
}); 