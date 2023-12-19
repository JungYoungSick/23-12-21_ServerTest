const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.post('/submit', (req, res) => {
  res.send('다음으로 연결')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})