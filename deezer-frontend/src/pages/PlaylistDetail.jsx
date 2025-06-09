// src/pages/PlaylistDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTracksByPlaylist, removeTrackFromPlaylist } from '../services/trackService';
import { getAllPlaylists } from '../services/playlistService';

const PlaylistDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tracks, setTracks] = useState([]);
  const [playlist, setPlaylist] = useState(null);

  const fetchTracks = async () => {
    const data = await getTracksByPlaylist(id);
    setTracks(data);
  };

  const fetchPlaylist = async () => {
    const playlists = await getAllPlaylists();
    const selected = playlists.find(p => p.id === Number(id));
    setPlaylist(selected);
  };

  const handleRemoveTrack = async (trackId) => {
    await removeTrackFromPlaylist(id, trackId);
    fetchTracks();
  };

  useEffect(() => {
    fetchPlaylist();
    fetchTracks();
  }, [id]);

  return (
    <div className="p-4">
      {playlist && (
        <div className="mb-4">
          <h1 className="text-2xl font-bold">{playlist.name}</h1>
          <p className="text-gray-600">Mood: {playlist.mood}</p>
        </div>
      )}

      <button
        onClick={() => navigate(`/playlists/${id}/search`)}
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Agregar canciones
      </button>

      <button
        onClick={() => navigate('/')}
        className="mt-6 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        Volver a todas tus playlists
      </button>

      {tracks.length === 0 ? (
        <p>No hay canciones en esta playlist.</p>
      ) : (
        <ul className="space-y-3">
          {tracks.map((track) => (
            <li key={track.id} className="p-4 border rounded shadow flex justify-between items-center">
              <div>
                <p className="font-semibold">{track.title}</p>
                <p className="text-sm text-gray-600">{track.artistName} - {track.albumTitle}</p>
              </div>
              <button
                onClick={() => handleRemoveTrack(track.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlaylistDetail;
