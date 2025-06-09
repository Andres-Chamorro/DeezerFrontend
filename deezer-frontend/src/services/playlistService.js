import { axiosInstance } from './axiosService';

export const getAllPlaylists = () =>
  axiosInstance.get('/playlists').then((res) => res.data);

export const deletePlaylist = (id) =>
  axiosInstance.delete(`/playlists/${id}`).then((res) => res.data);
