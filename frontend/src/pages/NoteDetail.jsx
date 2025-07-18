import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const NoteDetail = () => {
  const { id } = useParams();  
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <p>Loading note...</p>;
  if (!note) return <p>Note not found</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>{note.title}</h2>
      <p>{note.description}</p>
    </div>
  );
};

export default NoteDetail;

