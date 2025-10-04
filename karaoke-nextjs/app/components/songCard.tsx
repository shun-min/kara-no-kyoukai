"use client"
import next from "next";
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
  { songId, songName, playlist_length}: any
) {
  const [currentOrder, setCurrentOrder] = useState(playlist_length);
  
  function onAddSong() {
    const data = {
      "playlist": 4,
      "song": songId,
      "order": currentOrder + 1,
    }
    const result = updatePlaylist(data);
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