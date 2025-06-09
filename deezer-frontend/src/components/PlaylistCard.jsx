// src/components/PlaylistCard.jsx
const PlaylistCard = ({ playlist, onClick, onDelete }) => {
  return (
    <div
      className="p-4 border rounded shadow flex justify-between items-center cursor-pointer hover:bg-gray-100"
      onClick={onClick}
    >
      <div>
        <h3 className="text-lg font-semibold">{playlist.name}</h3>
        <p className="text-sm text-gray-600">Mood: {playlist.mood}</p>
      </div>
      <button
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
      >
        Eliminar
      </button>
    </div>
  );
};

export default PlaylistCard;
