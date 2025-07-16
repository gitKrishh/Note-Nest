import React from 'react';

const NoteList = ({ notes, onDelete }) => {
  return (
    <div>
      {notes.length === 0 && <p>No notes yet. Add one above!</p>}

      {notes.map(note => (
        <div key={note.id} style={{
          border: '1px solid #ccc',
          padding: '1rem',
          marginBottom: '1rem',
          borderRadius: '6px'
        }}>
          <h3>{note.title}</h3>
          <p>{note.description}</p>
          <button onClick={() => onDelete(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
