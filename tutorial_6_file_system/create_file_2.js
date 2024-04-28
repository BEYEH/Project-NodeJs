import { open } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, "mynewfile2.txt");

open(filePath, "w", function (err, file) {
  if (err) {
    throw err;
  }
  console.log("Saved");
});
