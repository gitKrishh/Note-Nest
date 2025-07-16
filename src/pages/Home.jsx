import React, { useState } from 'react';
import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';

const Home = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes(prev => [...prev, { ...newNote, id: Date.now() }]);
  };

  const deleteNote = (id) => {
    setNotes(prev => prev.filter(note => note.id !== id));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>My Notes</h2>
      <NoteForm onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />

    </div>
  );
};

export default Home;
