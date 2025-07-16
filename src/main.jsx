import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Feedback from './pages/Feedback.jsx';
import Sticky from './pages/Sticky.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Home />} />
          <Route path="sticky" element={<Sticky />} /> {/* This can later be StickyNotesPage */}
          <Route path="feedback" element={<Feedback />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
