"use client"

import { useState } from "react";

function removePlaylistItem(
  entryId: number
) {
  const url = "http://localhost:8000/karaoke/api/v1/playlistitem/" + entryId + "/";

  const success = fetch(url, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'}
  })
    .then((response) => {
      if (typeof(response) != "object") {
        return "Failed";
      }
      const res = response.json();
      return res;
    })

  return success;
}

export default function PlaylistEntry(
  {songName, path, link, order}: any
) {
  let src_path = link ? link : path;

  function playSong(
    src_path: string,
  ){
    localStorage.setItem("currSong", src_path);
    console.log("stored: ", src_path);
}

  return (
    <>
      <div className="flex gap-x-2 m-2">
        
        <button key={order} onClick={
          () => playSong(src_path=src_path)}
        >
          {order} {songName}
        </button>
        <button key={entryId} onClick={() => removePlaylistItem(entryId=entryId)}>-</button>
      </div>
    </>
  );
};
