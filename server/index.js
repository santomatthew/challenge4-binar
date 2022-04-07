// console.log("Implement servermu disini yak 😝!");
const http = require("http");
const fs = require("fs");

function loadHTML(file, statusCode, res) {
  res.writeHead(200, { "content-type": "text/html" });
  let html = fs.readFileSync(file);
  res.end(html);
}

function onRequest(req, res) {
  console.log(req.url);
  switch (req.url) {
    case "/":
      loadHTML("./public/index.html", 200, res);
      break;
    case "/cars":
      loadHTML("./public/cari_mobil.html", 200, res);
      break;
    default:
      loadHTML("./public/404.html", 404, res);
      break;
  }
}

const server = http.createServer(onRequest);

server.listen(8000);
