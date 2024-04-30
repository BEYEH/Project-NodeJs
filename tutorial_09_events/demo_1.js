import { createWriteStream } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filepath = join(__dirname, "demofile.txt");

var rs = createWriteStream(filepath);

rs.on("open", function () {
  console.log("The file is open.");
  rs.write("Hello, world!"); // 寫入資料
  rs.end(); // 結束寫入流
});

rs.on("finish", function () {
  console.log("Data has been written to the file.");
  rs.close(); // 關閉檔案
});

rs.on("close", function () {
  console.log('The file is closed.');
});