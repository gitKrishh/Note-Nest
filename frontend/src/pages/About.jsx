import React from 'react';

const About = () => {
  return (
    <div
      style={{
        padding: '2rem',
        maxWidth: '800px',
        margin: '0 auto',
        color: '#132A13',
        fontFamily: 'Segoe UI, sans-serif',
        backdropFilter: 'blur(10px)',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
        marginTop: '5rem',
      }}
    >
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>📓 About NoteNest</h1>
      <p style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
        <strong>NoteNest</strong> is a modern, dual-mode note-taking application that merges the flexibility of
        <strong> Sticky Notes</strong> with the structure of <strong>full-length titled notes</strong>.
      </p>

      <p style={{ lineHeight: '1.6', fontSize: '1.1rem', marginTop: '1rem' }}>
        Whether you're brainstorming with quick drag-and-drop sticky notes or organizing ideas with detailed
        notes, <strong>NoteNest</strong> is designed to adapt to your flow.
      </p>

      <ul style={{ lineHeight: '1.8', paddingLeft: '1.5rem', fontSize: '1.1rem' }}>
        <li>✅ Sticky notes with drag-and-drop support</li>
        <li>📝 Full-featured notes with titles and descriptions</li>
        <li>🎨 Aesthetic glassmorphism UI and smooth animations</li>
        <li>⚡ Fast, responsive, and distraction-free UX</li>
      </ul>

      <p style={{ marginTop: '1.5rem', fontSize: '1.05rem' }}>
        Built by <strong>Krish Prasad</strong> using <strong>React</strong>, with love for design and productivity.
      </p>

      <p style={{ marginTop: '1rem', fontSize: '1.05rem' }}>
        🌐 View the source code here:{' '}
        <a
          href="https://github.com/gitKrishh/Note-Nest"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#90cdf4', textDecoration: 'underline' }}
        >
          github.com/gitKrishh/Note-Nest
        </a>
      </p>
      <p style={{ marginTop: '0.5rem', fontSize: '1.05rem' }}>
        🔗 Connect on LinkedIn:{' '}
        <a
          href="https://www.linkedin.com/in/krishprasadd/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#90cdf4', textDecoration: 'underline' }}
        >
          linkedin.com/in/krishprasadd
        </a>
      </p>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🛰️ Deployment</h1>

      <p style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
        This full-stack Notes App is deployed using Render for the backend and Vercel for the frontend. The backend API, built with Node.js and Express, is hosted on Render and serves as the interface for storing and retrieving notes from a local JSON file (acting as a simple database). The frontend, built with React and Vite, is deployed on Vercel for fast and seamless performance. This architecture ensures a smooth user experience with real-time note updates, while also demonstrating how to integrate and deploy a full-stack application across two powerful platforms.
      </p>
    </div>
  );
};

export default About;
