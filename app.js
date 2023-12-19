const express = require('express');
const path = require('path')
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.post('/sub', (req, res) => {
  res.sendFile(path.join(__dirname, 'index2.html'));
})


app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})