import { createServer } from "http";
import { upperCase } from "upper-case";

const server = createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(upperCase("Hello World!"));
  res.end();
});

server.listen(8080);
