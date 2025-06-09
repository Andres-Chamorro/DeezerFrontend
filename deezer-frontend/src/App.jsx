// src/App.jsx
import React from 'react'; // ← AÑADE ESTO
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlaylistList from './pages/PlaylistList';
import PlaylistDetail from './pages/PlaylistDetail';
import SearchSongs from './pages/SearchSongs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PlaylistList />} />
        <Route path="/playlists/:id" element={<PlaylistDetail />} />
        <Route path="/playlists/:id/search" element={<SearchSongs />} />
      </Routes>
    </Router>
  );
}

export default App;
