import { writeFile } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filepath = join(__dirname, "mynewfile3.txt");

writeFile(filepath, "Hello content!", function (err) {
  if (err) throw err;
  console.log("Saved!");
});
