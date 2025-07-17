import React from 'react';
import { useParams } from 'react-router-dom';

const NoteDetail = () => {
  const { noteId } = useParams();

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Note ID: {noteId}</h2>
      {/* In a real app, you'd fetch or find this note by ID */}
      <p>This is where the detailed view of the note would be shown.</p>
    </div>
  );
};

export default NoteDetail;