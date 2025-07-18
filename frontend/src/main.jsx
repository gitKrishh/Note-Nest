import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Feedback from './pages/Feedback.jsx';
import Sticky from './pages/StickyPage.jsx';
import NoteDetail from './pages/NoteDetail.jsx';
import StickyPage from './pages/StickyPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/notes/:id" element={<NoteDetail />} />
          <Route path="sticky" element={<StickyPage />} />
          <Route path="feedback" element={<Feedback />} />
        </Route>
      </Routes>
    </BrowserRouter>
);
