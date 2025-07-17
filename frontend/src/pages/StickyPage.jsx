import React, { useState, useEffect } from 'react';
import StickyNote from '../components/StickyNote';

const StickyPage = () => {
  const [notes, setNotes] = useState(() =>
    JSON.parse(localStorage.getItem('stickyNotes') || '[]')
  );
  

  const addNote = () => {
  const sidebarWidth = 250;
  const spacing = 220; // vertical space between notes
  const notesPerColumn = 4;

  const column = Math.floor(notes.length / notesPerColumn);
  const row = notes.length % notesPerColumn;

  const newNote = {
    id: Date.now(),
    content: '',
    x: sidebarWidth + 20 + column * 240, // 240 = note width + margin
    y: 60 + row * spacing,               // stack vertically
  };

  setNotes(prev => [...prev, newNote]);
};



  const updateNote = (id, updatedFields) => {
    setNotes(prev =>
      prev.map(note => (note.id === id ? { ...note, ...updatedFields } : note))
    );
  };

  const deleteNote = (id) => {
    setNotes(prev => prev.filter(note => note.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('stickyNotes', JSON.stringify(notes));
  }, [notes]);

  return (
    <div>
      <button onClick={addNote}>Add Sticky Note</button>
      {notes.map(note => (
        <StickyNote
          key={note.id}
          note={note}
          onUpdate={updateNote}
          onDelete={() => deleteNote(note.id)}
        />
      ))}
    </div>
  );
};

export default StickyPage;
