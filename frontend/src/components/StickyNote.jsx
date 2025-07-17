import React, { useState, useRef } from 'react';

const StickyNote = ({ note, onUpdate, onDelete }) => {
  const [isDragging, setIsDragging] = useState(false);
  const noteRef = useRef();

  const handleMouseDown = (e) => {
    setIsDragging(true);
    noteRef.current.startX = e.clientX - note.x;
    noteRef.current.startY = e.clientY - note.y;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const newX = e.clientX - noteRef.current.startX;
    const newY = e.clientY - noteRef.current.startY;
    onUpdate(note.id, { x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleChange = (e) => {
    onUpdate(note.id, { content: e.target.value });
  };

  return (
    <div
      ref={noteRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
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
        cursor: isDragging ? 'grabbing' : 'grab',
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
      <button onClick={onDelete} style={{ marginTop: '0.5rem' }}>❌</button>
    </div>
  );
};

export default StickyNote;
