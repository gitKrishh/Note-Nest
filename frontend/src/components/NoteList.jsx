import React from 'react';
import { Link } from 'react-router-dom';

const NoteList = ({ notes, onDelete }) => {
  return (
    <div>
      {notes.length === 0 && <p>No notes yet. Add one above!</p>}

      {notes.map(note => (
        <div
          key={note.id}
          style={{
            border: '1px solid #ccc',
            padding: '1rem',
            marginBottom: '1rem',
            borderRadius: '6px',
            position: 'relative'
          }}
        >
          {/* Make title and description clickable */}
          <Link to={`/home/${note.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <h3>{note.title}</h3>
            <p>{note.description}</p>
          </Link>

          <button
            onClick={() => onDelete(note.id)}
            style={{ position: 'absolute', top: '10px', right: '10px' }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
