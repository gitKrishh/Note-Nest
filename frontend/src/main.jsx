import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App'; // Layout with <Nav /> + <Outlet />
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import NoteDetail from './pages/NoteDetail';
import StickyPage from './pages/StickyPage';
import { AuthProvider } from './Authcontext';
import ProtectedRoute from './ProtectedRoute';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        {/* Routes WITHOUT sidebar */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Routes WITH sidebar (Protected + Layout) */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <App /> {/* App contains Nav + Outlet */}
            </ProtectedRoute>
          }
        >
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="sticky" element={<StickyPage />} />
          <Route path="notes/:id" element={<NoteDetail />} />
        </Route>
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);
