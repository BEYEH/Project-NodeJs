import { createServer } from "http";

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text-plain" });
  res.end("Hello World!");
});

server.listen(8080);
