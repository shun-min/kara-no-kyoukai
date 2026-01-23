"use client"

interface PlaylistEntryProps {
  id: string;
  songName: string;
  path?: string;
  link?: string;
  order: number;
  onRemove: (id: string) => void;
}

export default function PlaylistEntry({
  id,
  songName,
  path,
  link,
  order,
  onRemove,
}: PlaylistEntryProps) {
  const src_path = link || path;

  function playSong(src_path: string) {
    localStorage.setItem("currSong", src_path);
    console.log("stored: ", src_path);
  }

  return (
    <div className="flex gap-x-2 m-2 items-center">
      <button
        onClick={() => src_path && playSong(src_path)}
        className="flex-1 text-left px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
      >
        {order}. {songName}
      </button>
      <button
        onClick={() => onRemove(id)}
        className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded transition-colors"
        aria-label="Remove from playlist"
      >
        −
      </button>
    </div>
  );
}
