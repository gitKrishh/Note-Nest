const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;
const DATA_FILE = path.join(__dirname, 'notes.json');

app.use(express.json());
app.use(cors());

// GET all notes or notes for a specific user
app.get('/notes', (req, res) => {
  const userId = req.query.userId;
  const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));

  if (userId) {
    const userNotes = data.filter(note => note.userId === userId);
    return res.json(userNotes);
  }

  res.json(data);
});

// POST a new note
app.post('/notes', (req, res) => {
  const { title, description, userId } = req.body;
  if (!userId || !title) {
    return res.status(400).json({ error: 'userId and title are required' });
  }

  const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  const newNote = {
    id: Date.now().toString(),
    title,
    description: description || '',
    userId
  };

  data.push(newNote);
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  res.status(201).json(newNote);
});

// DELETE a note (with optional userId verification)
app.delete('/notes/:id', (req, res) => {
  const { id } = req.params;
  const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  const noteToDelete = data.find(n => n.id === id);

  if (!noteToDelete) {
    return res.status(404).json({ error: 'Note not found' });
  }

  // Optional: Add userId check here to prevent unauthorized deletions

  const updatedData = data.filter(n => n.id !== id);
  fs.writeFileSync(DATA_FILE, JSON.stringify(updatedData, null, 2));
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
