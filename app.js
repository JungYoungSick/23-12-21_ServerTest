const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  function serverErrorLog() {
    res.writeHead(500);
    return res.end('서버 점검하시오')
  }
  console.log("요청이 잘 됩니다.")
  if (req.url === '/' && req.method === 'GET') {
    fs.readFile('./public/index.html', 'utf-8', (err, data) => {
      if (err) {
        serverErrorLog()
      }
      res.writeHead(200, { 'content-type': 'text/html' });
      res.end(data);
    })
  } else {
    res.writeHead(404);
    res.end('안되자나');
  }
});

const port = 5500;
server.listen(port, () => {
  console.log(`http://localhost:${port}`)
})