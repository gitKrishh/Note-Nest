import React, { useState, useRef } from 'react';

const StickyNote = ({ note, onUpdate, onDelete }) => {
  const noteRef = useRef();

  const handleMouseDown = (e) => {
  if (e.target.tagName.toLowerCase() === 'textarea') return;

  e.preventDefault();
  noteRef.current = {
    offsetX: e.clientX - note.x,
    offsetY: e.clientY - note.y,
  };
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mouseup', handleMouseUp);
};


  const handleMouseMove = (e) => {
    if (!noteRef.current) return;
    const newX = e.clientX - noteRef.current.offsetX;
    const newY = Math.max(100, e.clientY - noteRef.current.offsetY); // avoid header
    onUpdate(note.id, { x: newX, y: newY });
  };

  const handleMouseUp = () => {
    noteRef.current = null;
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  const handleChange = (e) => {
    onUpdate(note.id, { content: e.target.value });
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      style={{
        position: 'absolute',
        left: note.x,
        top: note.y,
        width: 200,
        minHeight: 150,
        padding: '1rem',
        backgroundColor: '#fffa65',
        border: '1px solid #ccc',
        borderRadius: '8px',
        cursor: 'grab',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        userSelect: 'none',
      }}
    >
      <textarea
        value={note.content}
        onChange={handleChange}
        placeholder="Write here..."
        style={{
          width: '100%',
          height: '100px',
          border: 'none',
          backgroundColor: 'transparent',
          resize: 'none',
          fontSize: '1rem',
          fontFamily: 'inherit',
          outline: 'none',
        }}
      />
      <button
        onClick={onDelete}
        style={{
          marginTop: '0.4rem',
          padding: '4px 8px',
          fontSize: '0.75rem',
          backgroundColor: '#ff5e5e',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        title="Delete note"
      >
        ❌
      </button>
    </div>
  );
};

export default StickyNote;
