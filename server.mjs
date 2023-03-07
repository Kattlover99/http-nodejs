import { createServer } from "http";

createServer((req, res) => {
  //   res.write('Hello World!');
  //   res.end();

  if (req.method === "GET") {
    res.write("Hello World!");
    res.end();
  } else if (req.method === "POST") {
    var body = "";
    req.on("data", function (chunk) {
      body += chunk;
    });

    req.on("end", function () {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(body);
    });
  }
}).listen(process.env.PORT);
