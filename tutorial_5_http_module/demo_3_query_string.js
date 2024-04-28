import { createServer } from "http";

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(req.url);
  res.end();
});

server.listen(8080);

// http://localhost:8080/ => /
// http://localhost:8080/summer => /summer
// http://localhost:8080/winter => /winter
