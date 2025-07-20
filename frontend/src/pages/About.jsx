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
        <strong>NoteNest</strong> is a sleek and intuitive dual-mode note-taking app that seamlessly blends the
        spontaneity of <strong>Sticky Notes</strong> with the structure of <strong>full-length titled notes</strong>.
      </p>

      <p style={{ lineHeight: '1.6', fontSize: '1.1rem', marginTop: '1rem' }}>
        Whether you're brainstorming quickly or organizing detailed thoughts, <strong>NoteNest</strong> is built to
        support your creative flow with a beautiful, functional interface.
      </p>

      <ul style={{ lineHeight: '1.8', paddingLeft: '1.5rem', fontSize: '1.1rem' }}>
        <li>✅ Drag-and-drop sticky notes for fast idea capture</li>
        <li>📝 Full-featured notes with titles and rich descriptions</li>
        <li>🎨 Elegant glassmorphism UI with smooth transitions</li>
        <li>⚡ Responsive, fast, and minimal distraction UX</li>
      </ul>

      <p style={{ marginTop: '1.5rem', fontSize: '1.05rem' }}>
        Built by <strong>Krish Prasad</strong> using <strong>React</strong>, with a passion for clean design and
        productivity.
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

      <h1 style={{ fontSize: '2rem', marginBottom: '1rem', marginTop: '2rem' }}>🛰️ Deployment</h1>
      <p style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
        <strong>NoteNest</strong> is a full-stack application with a React + Vite frontend and a Node.js + Express
        backend. The <strong>frontend</strong> is hosted on <strong>Firebase</strong>, ensuring fast loading speeds
        and secure hosting. The <strong>backend</strong> is deployed on <strong>Railway</strong>, which handles the
        API logic and stores note data in a local JSON file, simulating a lightweight database.
      </p>
      <p style={{ lineHeight: '1.6', fontSize: '1.1rem', marginTop: '1rem' }}>
        This setup offers smooth performance, live updates, and a practical example of how to build and deploy a
        modern full-stack project using Firebase and Railway.
      </p>
    </div>
  );
};

export default About;
