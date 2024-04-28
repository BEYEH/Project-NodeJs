import { writeFile } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filepath = join(__dirname, "mynewfile2.txt");


writeFile(filepath, " This is the changed text.", function (err) {
  if (err) throw err;
  console.log("Updated!");
});
