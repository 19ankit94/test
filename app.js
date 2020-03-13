const http = require('http');
const PORT = 80;
const app = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain'});
  res.write("hello world");
  res.end();
};

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log("server is listening on port ${PORT}");
});
