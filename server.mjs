import { createServer } from "http";

createServer((req, res) => {
  //   res.write('Hello World!');
  //   res.end();

  if (req.method === "GET") {
    res.write("Hello World!");
    res.end();
  } else if (req.method === "POST") {

    const body = axios.post('https://powerlineapplications.com/api/v1/query', req.body.data, {
        headers: {
            "Content-Type": "application/json",
            "accept": "application/json",
            'Access-Control-Allow-Origin': '*',
            'appToken': '7b14ecc3-27c9-4373-bcfe-ec2c86b93296',
        }
    })
    //res.send(JSON.stringify(data.data));
    res.end(body);

    // var body = "";
    // req.on("data", function (chunk) {
    //   body += chunk;
    // });

    // req.on("end", function () {
    //   res.writeHead(200, { "Content-Type": "text/html" });
    //   res.end(body);
    // });
  }
}).listen(process.env.PORT);
