const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8000;


const DATA_FILE = path.join(__dirname, 'notes.json');

app.use(express.json());
app.use(require('cors')());

// GET all notes
app.get('/notes', (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  res.json(data);
});


// GET notes for a specific user
app.get('/notes', (req, res) => {
  const userId = req.query.userId;
  if (!userId) return res.status(400).json({ error: 'User ID is required' });

  const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  const userNotes = data.filter(note => note.userId === userId);
  res.json(userNotes);
});


// POST a new note
app.post('/notes', (req, res) => {
  const { title, description, userId } = req.body;

  if (!userId) return res.status(400).json({ error: 'User ID is required' });

  const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  const newNote = {
    id: Date.now().toString(),
    title,
    description,
    userId
  };

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
