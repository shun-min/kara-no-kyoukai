"use client"

import Playlist from "../components/playlist";
import MediaPlayer from "../components/player";
import { usePlayerContext } from '../context/PlayerContext';


export default function Layout(
  { children }: { children: React.ReactNode },
) {
  const { activeSong } = usePlayerContext();
  return (
    <>
      <main>
        <div className='inline-block justify-end align-top'>
          {children}
        </div>
        <div className='inline-block justify-end align-top'>
          <Playlist />
        </div>
        <div className='inline-block justify-end align-top'>
          <MediaPlayer 
            url={activeSong}
            // func={fetchNextSong}
          />
        </div>
      </main>
    </>
  )
}
