import { rename } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filepath = join(__dirname, "mynewfile3.txt");
const renamedFilePath = join(__dirname, "myrenamedfile.txt");

rename(filepath, renamedFilePath, function (err) {
  if (err) throw err;
  console.log("File Renamed!");
});
