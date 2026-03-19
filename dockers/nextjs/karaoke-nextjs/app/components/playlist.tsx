"use client"

import { usePlaylistContext } from "../context/PlaylistContext";
import PlaylistEntry from "./playlist_entry";

export default function Playlist() {
  const { playlist, clearPlaylist } = usePlaylistContext();

  return (
    <div className="w-full inline-block justify-end align-top">
      <div className="flex justify-between items-center m-5">
        <h2 className="text-xl font-bold">Playlist</h2>
      </div>
      <div>
        {playlist.length > 0 && (
          <button
            onClick={clearPlaylist}
            className="px-3 py-1 text-sm bg-gray-500 hover:bg-gray-600 text-white rounded transition-colors"
          >
            Clear All
          </button>
        )}
      </div>

      {playlist.length === 0 ? (
        <div className="m-5 text-gray-500 text-center">
          Empty
        </div>
      ) : (
        <div className="max-h-96 overflow-y-auto">
          {playlist.map((item) => (
            <PlaylistEntry
              key={item.id}
              id={item.id}
              songName={item.name}
              link={item.link}
              order={item.order}
            />
          ))}
        </div>
      )}
    </div>
  );
}
