"use client"
import React, { useEffect } from 'react'
import { usePlayerContext } from '../context/PlayerContext';

function MediaPlayer() {
  const { activeSong, setCurrentSong, fetchNextSong } = usePlayerContext();

  if (activeSong != null) {
    let url = "https://www.youtube.com/embed/" + activeSong;
    return (
      <>
      <div>
      {url}
      </div>
      <div>
        <iframe 
        id="myPlayer" 
        width="420" height="315"
        src={url}
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        title=''
        onEnded={fetchNextSong}
        />
      </div>
      </>
    );
  } else {
    return (<div>No video playing</div>);
  }
}

export default MediaPlayer
