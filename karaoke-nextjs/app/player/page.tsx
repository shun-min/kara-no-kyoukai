"use client"
import React, { useEffect, useState } from 'react'


function MediaPlayer() {
  const [activeSong, setActiveSong] = useState("");
  
  function checkActiveSong() {
    const srcPath = localStorage.getItem("currSong");
    if (srcPath !== null) {
      setActiveSong(srcPath);
    }
  }

  useEffect(() => {
    checkActiveSong();
  }
  , []);

  if (activeSong != null) {
    return (
      <>
      <div>
      {activeSong}
      </div>
      <div>
        <iframe width="420" height="315" src={"https://www.youtube.com/embed/" + activeSong + "?&autoplay=1"} title=''/>
      </div>
      </>
    );
  } else {
    return (<div>No video playing</div>);
  }
}

export default MediaPlayer
