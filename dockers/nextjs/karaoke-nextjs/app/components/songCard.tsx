"use client"
import { usePlaylistContext } from "../context/PlaylistContext";

interface SongCardProps {
  songId: number | string;
  songName: string;
  link: string;
}

export default function SongCard({
  songId,
  songName,
  link,
}: SongCardProps) {
  const { addSong } = usePlaylistContext();
  
  function onAddSong() {
    addSong(songName, link);
  }

  return (
    <>
      <button
        key={songId}
        onClick={onAddSong}
        className="px-4 py-2 m-2 bg-green-500 hover:bg-green-600 text-white rounded transition-colors"
      >
        {songName}
      </button>
    </>
  );
}