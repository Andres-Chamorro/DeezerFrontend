// src/pages/SearchSongs.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { searchTracks } from '../services/deezerService';
import { addTrackToPlaylist } from '../services/trackService';

const SearchSongs = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const data = await searchTracks(query);
      setResults(data);
    } catch (error) {
      console.error('Error al buscar canciones:', error);
    }
  };

  const handleAdd = async (track) => {
    const trackDTO = {
      title: track.title,
      duration: track.duration,
      rank: track.rank,
      artistName: track.artist.name,
      albumTitle: track.album.title,
      artistPicture: track.artist.picture_medium,
      albumCover: track.album.cover_medium,
    };
    try {
      await addTrackToPlaylist(id, trackDTO);
      alert('Canción agregada ✅');
    } catch (error) {
      console.error('Error al agregar canción:', error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Buscar canciones</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Buscar en Deezer..."
          className="border px-3 py-2 rounded w-full"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch} className="bg-blue-600 text-white px-4 py-2 rounded">
          Buscar
        </button>
      </div>

      <ul className="space-y-4">
        {results.map((track) => (
          <li key={track.id} className="p-3 border rounded shadow flex justify-between items-center">
            <div>
              <p className="font-semibold">{track.title}</p>
              <p className="text-sm text-gray-600">
                {track.artist.name} - {track.album.title}
              </p>
            </div>
            <button
              onClick={() => handleAdd(track)}
              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
            >
              Agregar
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => navigate(`/playlists/${id}`)}
        className="mt-6 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        Volver a playlist
      </button>
    </div>
  );
};

export default SearchSongs;
