import React, { useState } from 'react';
import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';
import notes from '../../../backend/notes.json';

const Home = () => {
  const [note, setNote] = useState(notes);

  const addNote = async (newNote) => {
  try {
    const response = await fetch('http://localhost:8000/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newNote)
    });

    const savedNote = await response.json(); 

    setNote(prev => [...prev, savedNote]); 
  } catch (error) {
    console.error('Failed to add note:', error);
  }
};


  const deleteNote = (id) => {
    setNote(prev => prev.filter(note => note.id !== id));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>My Notes</h2>
      <NoteForm onAdd={addNote} />
      <NoteList notes={note} onDelete={deleteNote} />

    </div>
  );
};

export default Home;
