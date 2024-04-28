import { createServer } from "http";
import {getDateTime} from "./own_module.js";

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("The date and time are currently: " + getDateTime());
  res.end();
});

server.listen(8080);
