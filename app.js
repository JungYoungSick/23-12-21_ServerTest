const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  function serverErrorLog() {
    res.writeHead(500);
    return res.end('서버 연결 오류')
  }
  console.log("연결을 확인하시오.")
  if (req.url === '/' && req.method === 'GET') {
    fs.readFile('./public/index.html', 'utf8', (err, data) => {
      if (err) {
        serverErrorLog();
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data)
    })
  } else {
    res.writeHead(404)
    res.end('연결안됨')
  }
})

const port = 3000;
server.listen(port, () => {
  console.log(`http://localhost:${port}`)
})