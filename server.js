const express = require('express');
const path = require('path');

const PORT = 8000;
const app = express();


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'notes.html'))
})

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
}) 