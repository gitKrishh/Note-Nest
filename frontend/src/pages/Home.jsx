import React, { useState, useEffect } from 'react';
import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';

const Home = () => {
  const [note, setNote] = useState([]);

  // Fetch notes when the component loads
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch('https://note-nest-y5s5.onrender.com/notes');
        const data = await response.json();
        setNote(data);
      } catch (error) {
        console.error('Failed to fetch notes:', error);
      }
    };

    fetchNotes();
  }, []);

  // Add a note
  const addNote = async (newNote) => {
    try {
      const response = await fetch('https://note-nest-y5s5.onrender.com/notes', {
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

  // Delete a note
  const deleteNote = async (id) => {
    try {
      await fetch(`https://note-nest-y5s5.onrender.com/notes/${id}`, {
        method: 'DELETE'
      });

      setNote(prev => prev.filter(note => note.id !== id));
    } catch (error) {
      console.error('Failed to delete note:', error);
    }
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
