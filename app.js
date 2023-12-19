const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const bodyParser = require('body-parser');

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
app.post('/submit', (req, res) => {
  res.sendFile(path.join(__dirname, 'index2.html'));
});
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})