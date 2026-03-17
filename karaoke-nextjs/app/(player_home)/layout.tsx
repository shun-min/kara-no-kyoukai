"use client"
import MediaPlayer from "../components/player";
import { usePlayerContext } from '../context/PlayerContext';

export default function Layout(
  { children }: { children: React.ReactNode },
) {
  const {activeSong, fetchNextSong} = usePlayerContext();

  return (
    <>
      <main>
        <MediaPlayer 
          url={activeSong}
          func={fetchNextSong}
        />
        {children}
      </main>
    </>
  )
}
