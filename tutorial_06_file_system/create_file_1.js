import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { appendFile } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, "mynewfile1.txt");

appendFile(
  filePath,
  "Hello content!",
  function (err) {
    if (err) throw err;
    console.log("Saved!");
  }
);
