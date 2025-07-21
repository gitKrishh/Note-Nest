import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import './NoteList.css';
import { useAuth } from '../Authcontext';


const NoteList = ({ notes, onDelete }) => {

  const containerRef = useRef(null);

  useEffect(() => {
    gsap.from(containerRef.current.children, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    });
  }, [notes]);

  return (
    <div ref={containerRef} className="note-list">
      {notes.length === 0 && <p className="empty-msg">No notes yet. Add one above!</p>}

      {notes.map(note => (
        <div
  key={note.id}
  style={{
    border: '1px solid #ccc',
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: '12px',
    position: 'relative',
    backgroundColor: '#fefefe',
    boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
    // transition: 'transform 0.3s ease',
    maxWidth: '500px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer'
  }}

onMouseEnter={(e) => {
  e.currentTarget.style.transform = 'scale(1.02)';
  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
}}
onMouseLeave={(e) => {
  e.currentTarget.style.transform = 'scale(1)';
  e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.1)';
}}

>
  <Link to={`/notes/${note.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    <h3
      style={{
        marginBottom: '0.5rem',
        fontSize: '1.25rem',
        color: '#1f1f1f',
      }}
    >
      {note.title}
    </h3>

    <p
      style={{
        fontSize: '0.95rem',
        color: '#444',
        lineHeight: '1.4',
        maxHeight: '4.2em', // ~3 lines
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
      }}
    >
      {note.description}
    </p>
  </Link>


          <button
  className="delete-btn"
  onClick={() => {
    fetch(`https://note-nest-production.up.railway.app/notes/${note.id}`, { method: 'DELETE' })
      .then(res => {
        if (res.ok) onDelete(note.id);
      });
  }}
  style={{
    position: 'absolute',
    top: '10px',
    right: '12px',
    background: 'rgba(255, 0, 0, 0.1)',
    border: 'none',
    fontSize: '0.75rem',
    padding: '3px 6px',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background 0.2s ease, transform 0.2s ease'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.background = 'rgba(255, 0, 0, 0.2)';
    e.currentTarget.style.transform = 'scale(1.1)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.background = 'rgba(255, 0, 0, 0.1)';
    e.currentTarget.style.transform = 'scale(1)';
  }}
>
  ❌
</button>

        </div>
      ))}
    </div>
  );
};

export default NoteList;
