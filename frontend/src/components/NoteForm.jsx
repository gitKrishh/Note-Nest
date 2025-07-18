import React, { useState, useRef } from 'react';
import './NoteForm.css';

const NoteForm = ({ onAdd }) => {
  const [note, setNote] = useState({ title: '', description: '' });
  const textareaRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });

    if (name === 'description' && textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  };


  const handleSubmit = (e) => {
  e.preventDefault();
  onAdd(note); // Only call the parent handler
  setNote({ title: '', description: '' });
  if (textareaRef.current) {
    textareaRef.current.style.height = 'auto';
  }
};


  return (
    <div id="formbox">
      <form onSubmit={handleSubmit} style={{ marginBottom: '1.5rem' }}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
          required
          style={{
            padding: '0.5rem',
            marginBottom: '0.5rem',
            display: 'block',
            width: '100%',
            boxSizing: 'border-box',
          }}
        />
        <textarea
          ref={textareaRef}
          name="description"
          placeholder="Description"
          value={note.description}
          onChange={handleChange}
          required
          rows={3}
          style={{
            padding: '0.5rem',
            marginBottom: '0.5rem',
            display: 'block',
            width: '100%',
            resize: 'none',
            overflow: 'hidden',
            lineHeight: '1.5rem',
            boxSizing: 'border-box',
          }}
        />
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default NoteForm;
