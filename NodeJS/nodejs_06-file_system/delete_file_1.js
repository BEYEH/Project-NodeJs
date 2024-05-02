import { unlink } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filepath = join(__dirname, "mynewfile2.txt");

unlink(filepath, function (err) {
  if (err) throw err;
  console.log('File deleted!');
}); 