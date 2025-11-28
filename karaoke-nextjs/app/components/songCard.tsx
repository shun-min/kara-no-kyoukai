"use client"
import { useState } from "react";

function updatePlaylist(
  data: Object
) {
  const url = "http://localhost:8000/karaoke/api/v1/playlistitem/";

  const playlist_item = fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
    .then((response) => {
      if (typeof(response) != "object") {
        return "Failed";
      }
      const res = response.json();
      return res;
    })

  return playlist_item;
}

export default function SongCard(
  { songId, songName, path, link, playlist_length}: any
) {
  const [currentOrder, setCurrentOrder] = useState(playlist_length);
  
  function onAddSong() {
    const data = {
      "name": songName,
      "path": path,
      "link": link,
    };
    let playlist_str = localStorage.getItem("playlist");
    console.log(">>>>>", playlist_str);
    let playlist_entries = JSON.parse(playlist_str);
    playlist_entries[currentOrder] = data;
    setCurrentOrder(currentOrder + 1);
  };

  return (
    <>
      <button key={songId} onClick={onAddSong}>
        {songName}
      </button>
    </>
  );
};