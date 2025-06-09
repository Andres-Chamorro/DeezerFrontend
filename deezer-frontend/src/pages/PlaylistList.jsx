// src/pages/PlaylistList.jsx
import React, { useEffect, useState } from 'react';
import { getAllPlaylists, deletePlaylist } from '../services/playlistService';
import { useNavigate } from 'react-router-dom';

const PlaylistList = () => {
  const [playlists, setPlaylists] = useState([]);
  const navigate = useNavigate();

  const fetchPlaylists = async () => {
    try {
      const data = await getAllPlaylists();
      setPlaylists(data);
    } catch (error) {
      console.error('Error al obtener playlists:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deletePlaylist(id);
      fetchPlaylists(); // Refresca después de eliminar
    } catch (error) {
      console.error('Error al eliminar playlist:', error);
    }
  };

  useEffect(() => {
    fetchPlaylists();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Tus Playlists</h1>
      <div className="grid gap-4">
        {playlists.map((playlist) => (
          <div
            key={playlist.id}
            className="p-4 border rounded shadow cursor-pointer hover:bg-gray-100 flex justify-between items-center"
            onClick={() => navigate(`/playlists/${playlist.id}`)}
          >
            <div>
              <h2 className="text-lg font-semibold">{playlist.name}</h2>
              <p className="text-sm text-gray-600">Mood: {playlist.mood}</p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(playlist.id);
              }}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistList;
