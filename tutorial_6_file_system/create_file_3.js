var fs = require("fs");

fs.writeFile(
  "./tutorial_6_file_system/mynewfile3.txt",
  "Hello content!",
  function (err) {
    if (err) throw err;
    console.log("Saved!");
  }
);
