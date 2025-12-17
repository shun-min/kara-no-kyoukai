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
        {activeSong}
        {/* <video src={activeSong} autoPlay></video> */}
      </>
    );
  } else {
    return <div>No video playing</div>;
  }
}

export default MediaPlayer
