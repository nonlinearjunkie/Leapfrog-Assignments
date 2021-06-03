const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile(
      path.join(__dirname, "pages", "index.html"),
      {
        encoding: "utf-8",
      },
      (err, html) => {
        if (err) {
          throw err;
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(html);
        }
      }
    );
  } else if (req.url == "/contact") {
    fs.readFile(
      path.join(__dirname, "pages", "contact.html"),
      {
        encoding: "utf-8",
      },
      (err, html) => {
        if (err) {
          throw err;
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(html);
        }
      }
    );
  } else {
    res.end("Route Not Found");
  }
});

server.listen(3000, "localhost", () => {
  console.log("Server starting at port 3000");
});
