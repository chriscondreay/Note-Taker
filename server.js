const express = require('express');
const path = require('path');
const db = require('./db/db.json')
const fs = require('fs');
const http = require('http');

const PORT = 8000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'notes.html'))
})

app.get('/api/notes', (req, res) => res.json(db))

app.post('/api/notes', (req, res) => {
  console.log(req.body);
  let newNote = {
    noteTitle: req.body.title,
    noteText: req.body.text
  }
  db.push(newNote)
  fs.writeFile('./db/db.json', JSON.stringify(db), (err) =>{
        if (err) {
            return console.log(err)
        }; 
        res.json(db)
    })
})


app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
}) 