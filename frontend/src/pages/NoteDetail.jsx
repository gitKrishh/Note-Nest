import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import gsap from 'gsap';
import './NoteDetail.css';

const NoteDetail = () => {
  const { id } = useParams();  
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef();

  useEffect(() => {
    fetch(`http://localhost:8000/notes/${id}`)
      .then(res => res.json())
      .then(data => {
        setNote(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading note:', err);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (!loading) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );
    }
  }, [loading]);

  if (loading) return <p className="note-loading">Loading note...</p>;
  if (!note) return <p className="note-notfound">Note not found</p>;

  return (
    <div ref={containerRef} className="note-detail-container">
      <h2 className="note-title">{note.title}</h2>
      <p className="note-description">{note.description}</p>
    </div>
  );
};

export default NoteDetail;
