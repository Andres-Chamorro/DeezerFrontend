// src/components/SearchResultItem.jsx
const SearchResultItem = ({ track, onAdd }) => {
  return (
    <div className="p-4 border rounded shadow flex justify-between items-center">
      <div>
        <p className="font-semibold">{track.title}</p>
        <p className="text-sm text-gray-600">{track.artist.name} - {track.album.title}</p>
      </div>
      <button
        onClick={onAdd}
        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
      >
        Agregar
      </button>
    </div>
  );
};

export default SearchResultItem;
