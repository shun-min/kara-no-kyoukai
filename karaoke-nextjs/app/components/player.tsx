"use client"
import React, { useEffect } from 'react'

function MediaPlayer() {
  
  const [srcPath, setSrcPath] = "";

  function getSelectedSongPath() {
    return localStorage.getItem("currSong");
  };

  useEffect(() => {
    const srcPath = getSelectedSongPath();
    console.log("playing "+ srcPath);
  }
  , []);

  return (
    <>
      <video src={srcPath} autoPlay></video>
    </>
  )
}

export default MediaPlayer
