"use client"
import React, { useEffect, useState } from 'react'


function MediaPlayer() {
  const [activeSong, setActiveSong] = useState("");
  
  function checkActiveSong() {
    if (localStorage.getItem("currSong") === null) {
      return;
    } else {
      let srcPath = localStorage.getItem("currSong");
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
