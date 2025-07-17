const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 8000;

const DATA_FILE = path.join(__dirname, 'notes.json');

app.use(express.json());
app.use(require('cors')());

// GET all notes
app.get('/notes', (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  res.json(data);
});

// GET single note by ID
app.get('/notes/:id', (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  const note = data.find(n => n.id === req.params.id);
  if (!note) return res.status(404).send({ error: 'Note not found' });
  res.json(note);
});

// POST a new note
app.post('/notes', (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  const newNote = { ...req.body, id: Date.now().toString() };
  data.push(newNote);
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  res.status(201).json(newNote);
});

// DELETE note
app.delete('/notes/:id', (req, res) => {
  let data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  data = data.filter(n => n.id !== req.params.id);
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
