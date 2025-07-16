import React, { useState } from 'react';
import './NoteForm.css'

const NoteForm = ({ onAdd }) => {
    const [note, setNote] = useState({ title: '', description: '' });

    const handleChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(note);
        setNote({ title: '', description: '' });
    };
    //1650
    return (
        <div id='formbox'>
            <form onSubmit={handleSubmit} style={{ marginBottom: '1.5rem' }}>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={note.title}
                    onChange={handleChange}
                    required
                    style={{ padding: '0.5rem', marginBottom: '0.5rem', display: 'block', width: '100%' }}
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={note.description}
                    onChange={handleChange}
                    required
                    rows={3}
                    style={{ padding: '0.5rem', marginBottom: '0.5rem', display: 'block', width: '100%' }}
                />
                <button type="submit">Add Note</button>
            </form>
        </div>
    );
};

export default NoteForm;
