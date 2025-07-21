import React, { useState, useEffect } from 'react';
import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';
import { useAuth } from '../Authcontext';

const Home = () => {
  const [note, setNote] = useState([]);
  const { currentUser } = useAuth();

  // Fetch notes on mount
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch(
          `https://note-nest-production.up.railway.app/notes?userId=${currentUser.uid}`
        );
        const data = await response.json();
        setNote(data);
      } catch (error) {
        console.error('Failed to fetch notes:', error);
      }
    };

    if (currentUser) {
      fetchNotes();
    }
  }, [currentUser]);

  // Add a new note
  const addNote = (noteData) => {
    fetch('https://note-nest-production.up.railway.app/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...noteData, userId: currentUser.uid })
    })
      .then(res => res.json())
      .then(newNote => {
        setNote(prev => [...prev, newNote]);
      });
  };

  // Delete a note
  const deleteNote = async (id) => {
    try {
      await fetch(`https://note-nest-production.up.railway.app/notes/${id}`, {
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
