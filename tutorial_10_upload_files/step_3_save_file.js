import http from "node:http";
import formidable from "formidable";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import fs from "fs";

const FILE_UPLOAD_PATH = "/fileupload";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = http.createServer(async function (req, res) {
  if (req.url === FILE_UPLOAD_PATH && req.method.toLowerCase() === "post") {
    // parse a file upload
    const form = formidable({});
    let fields;
    let files;
    try {
      [fields, files] = await form.parse(req);
      // console.log(files);
      var oldpath = files.fileupload[0].filepath;
      var newpath = join(
        __dirname,
        FILE_UPLOAD_PATH,
        files.fileupload[0].originalFilename
      );
      // console.log(oldpath);
      // console.log(newpath);
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write("File uploaded and moved!");
        res.end();
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      '<form action="fileupload" method="post" enctype="multipart/form-data">'
    );
    res.write('<input type="file" name="fileupload"><br>');
    res.write('<input type="submit">');
    res.write("</form>");
    return res.end();
  }
});

server.listen(8080);
