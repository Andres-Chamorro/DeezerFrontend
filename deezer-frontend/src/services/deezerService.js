// src/services/deezerService.js
import { axiosInstance } from './axiosService';

export const searchTracks = async (query) => {
  const response = await axiosInstance.get(`/deezer/search?q=${encodeURIComponent(query)}`);
  return response.data.data; 
};
