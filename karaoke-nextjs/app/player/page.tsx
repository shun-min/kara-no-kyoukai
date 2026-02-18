"use client"
import next from 'next';
import React, { useEffect, useState } from 'react'


function MediaPlayer() {
  const [activeSong, setActiveSong] = useState("");
  function platNextSong() {
    let videoElement = document.getElementById('myPlayer');
    // videoElement.src = videoList[currentVideoIndex]; // start with the first video videoElement.play();
    // videoElement.addEventListener('ended', function() { // when a video ends, increment currentVideoIndex, and load the next video currentVideoIndex++;
    //   // if we're at the end of the video list, loop back to the start
    //   if(currentVideoIndex >= videoList.length) {
    //       currentVideoIndex = 0;
    //   }

    //   // set the source to the next video in the list, and play
    videoElement.src = localStorage.getItem[];
    //   videoElement.play();
    let nextSong = "";
      setActiveSong(nextSong);
  }
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
        <iframe 
        id="myPlayer" 
        width="420" height="315"
        src={"https://www.youtube.com/embed/" + activeSong + "?&autoplay=1"}
        title=''
        onEnded={platNextSong}
        />
      </div>
      </>
    );
  } else {
    return (<div>No video playing</div>);
  }
}

export default MediaPlayer
