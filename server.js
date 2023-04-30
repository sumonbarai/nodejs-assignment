const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const port = process.env.port || 3000;

// Define the path to the public folder
const publicFolderPath = path.join(__dirname, "public");
const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url.toLowerCase() === "/home.html") {
    const filePath = path.join(publicFolderPath, "home.html");
    fs.readFile(filePath, "utf-8", (err, html) => {
      if (!err) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
      }
    });
  } else if (req.url.toLowerCase() === "/about.html") {
    const filePath = path.join(publicFolderPath, req.url.toLowerCase());
    fs.readFile(filePath, "utf-8", (err, html) => {
      if (!err) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
      }
    });
  } else if (req.url.toLowerCase() === "/contact.html") {
    const filePath = path.join(publicFolderPath, req.url.toLowerCase());
    fs.readFile(filePath, "utf-8", (err, html) => {
      if (!err) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
      }
    });
  } else if (req.url.match(/.css$/)) {
    const filePath = path.join(publicFolderPath, req.url);
    res.writeHead(200, { "Content-Type": "text/css" });
    fs.createReadStream(filePath).pipe(res);
  } else if (req.url.match(/.js$/)) {
    const filePath = path.join(publicFolderPath, req.url);
    res.writeHead(200, { "Content-Type": "text/javaScript" });
    fs.createReadStream(filePath).pipe(res);
  } else if (req.url.match(/.jpg$/)) {
    const filePath = path.join(publicFolderPath, req.url);
    res.writeHead(200, { "Content-Type": "image/jpeg" });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Page Not Found </h1>");
  }
});

server.listen(port, () => {
  console.log(`server is running http://localhost:${port}`);
});
