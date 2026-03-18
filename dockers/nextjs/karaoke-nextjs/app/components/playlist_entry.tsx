"use client"
import { usePlaylistContext } from "../context/PlaylistContext";
import { usePlayerContext } from '../context/PlayerContext';


interface PlaylistEntryProps {
  id: string;
  songName: string;
  path?: string;
  link?: string;
  order: number;
}

let win: any = null;

export default function PlaylistEntry({
  id,
  songName,
  path,
  link,
  order,
}: PlaylistEntryProps) {
  const { removeSong } = usePlaylistContext();
  const { setCurrentSong } = usePlayerContext();
  function playSong() {
    if (link === undefined) {
      return;
    }
    setCurrentSong(link);
  }

  return (
    <div className="flex gap-x-2 m-2 items-center">
      <button
        onClick={playSong}
        className="flex-1 text-left px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
      >
        {order}. {songName}
      </button>
      <button
        onClick={() => removeSong(id)}
        className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded transition-colors"
        aria-label="Remove from playlist"
      >
        −
      </button>
    </div>
  );
}
