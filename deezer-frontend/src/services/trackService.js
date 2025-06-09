import { axiosInstance } from './axiosService';

export const getTracksByPlaylist = (playlistId) =>
  axiosInstance.get(`/playlists/${playlistId}/tracks`).then((res) => res.data);

export const addTrackToPlaylist = (playlistId, track) =>
  axiosInstance.post(`/playlists/${playlistId}/tracks`, track).then((res) => res.data);

export const removeTrackFromPlaylist = (playlistId, trackId) =>
  axiosInstance.delete(`/playlists/${playlistId}/tracks/${trackId}`).then((res) => res.data);
