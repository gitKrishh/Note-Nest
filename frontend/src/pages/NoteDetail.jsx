import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import gsap from 'gsap';
import './NoteDetail.css';
import { useAuth } from '../Authcontext';

const NoteDetail = () => {
  const { currentUser } = useAuth();
  const { id } = useParams();  
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef();

  useEffect(() => {
    // Fetch note by ID
    fetch(`https://note-nest-production.up.railway.app/notes/${id}`)
      .then(res => res.json())
      .then(data => {
        // If your backend does not filter by user, do it manually here
        if (data.userId === currentUser.uid) {
          setNote(data);
        } else {
          setNote(null); // unauthorized access
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading note:', err);
        setLoading(false);
      });
  }, [id, currentUser]);

  useEffect(() => {
    if (!loading && note) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );
    }
  }, [loading, note]);

  if (loading) return <p className="note-loading">Loading note...</p>;
  if (!note) return <p className="note-notfound">Note not found or unauthorized</p>;

  return (
    <div ref={containerRef} className="note-detail-container">
      <h2 className="note-title">{note.title}</h2>
      <p className="note-description">{note.description}</p>
    </div>
  );
};

export default NoteDetail;
