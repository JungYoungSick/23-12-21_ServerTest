const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  function serverErrorLog() {
    res.writeHead(500);
    res.end("서버 생성오류")
  }
  console.log('받는 요청 오류확인 이상없음.')
  if (req.url === '/') {
    fs.readFile('./public/index.html', 'utf8', (err, data) => {
      if (err) {
        serverErrorLog();
      }
      res.writeHead(200, { 'content-type': 'text/html' })
      res.end(data);
    })
  } else {
    res.writeHead(404);
    res.end('서버 연결 오류')
  }
})
const port = 8000;
server.listen(port, () => {
  console.log(`출력 http://localhost:${port}`)
})