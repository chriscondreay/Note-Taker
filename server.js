const express = require('express');
const path = require('path');
const fs = require('fs'),
const http = require('http')

const PORT = 8000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'notes.html'))
})

app.post('/api/notes', (req, res) => {
  console.log(req.body);
  let note = {
    noteTitle: req.body.title,
    noteText: req.body.text
  }
})

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
}) 