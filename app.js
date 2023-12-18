const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
  function serverEroorLog() {
    res.writeHead(500);
    return res.end('서버에 문제가 있습니다.');
  }
  console.log("어떤 요청이 들어오는지 확인", "URL ->", req.url, "method ->", req.method);
  if (req.url === '/' && req.method === 'GET') {
    fs.readFile('./public/index.html', 'utf-8', (err, data) => {
      if (err) {
        serverErrorLog();
      }
      res.writeHead(200, { 'Contenttype': 'text/html' });
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end('not Found');
  }
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`)
})