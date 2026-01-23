"use client"
import { useRouter } from "next/navigation";
import Link from 'next/link';

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
  // const router = useRouter();

  function playSong(src_path: string) {
    localStorage.setItem("currSong", src_path);
    console.log("playing: ", src_path);
    // router.push("/");
  }

  return (
    <div className="flex gap-x-2 m-2 items-center">
      {/* <button
        onClick={() => src_path && playSong(src_path)}
        className="flex-1 text-left px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
      >
        {order}. {songName}
      </button> */}
      <Link
        href="/player" target="_blank" rel="noopener noreferrer"
        onClick={() => src_path && playSong(src_path)}
      >
        {order}. {songName}
      </Link>
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
