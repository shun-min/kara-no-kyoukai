"use client"
import React, { useEffect } from 'react'


let isPlaying = false;

function getSelectedSongPath() {
  let song = localStorage.getItem("currSong");
  if (song === null) {
    return "";
  }
  isPlaying = true;
  return song;
};

function MediaPlayer() {
  let srcPath = "";
  useEffect(() => {
    if (isPlaying === false && srcPath != "") {
      return;
    }
    srcPath = getSelectedSongPath();
  }
  , [isPlaying, srcPath]);

  if (isPlaying) {
    return (
      <>
        {srcPath}
        {/* <video src={srcPath} autoPlay></video> */}
      </>
    );
  } else {
    return <div>No video playing</div>;
  }
}

export default MediaPlayer
