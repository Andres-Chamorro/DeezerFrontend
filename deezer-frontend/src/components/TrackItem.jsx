// src/components/TrackItem.jsx
const TrackItem = ({ track, onDelete }) => {
  return (
    <div className="p-4 border rounded shadow flex justify-between items-center">
      <div>
        <p className="font-semibold">{track.title}</p>
        <p className="text-sm text-gray-600">{track.artistName} - {track.albumTitle}</p>
      </div>
      <button
        onClick={onDelete}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Eliminar
      </button>
    </div>
  );
};

export default TrackItem;
