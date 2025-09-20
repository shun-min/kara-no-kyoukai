"use client"

import { useEffect, useState } from 'react';
import SongCard from "./songCard";

interface PlaylistData {
  id: number
}

async function fetchPlaylist() {
  let pl_url = 'http://localhost:8000/karaoke/api/v1/playlists/?name="My Playlist"';
  console.log("Fetch playlist")
  const playlist = await fetch(pl_url)
    .then((response) => {
      const res = response.json();
      return res;
    })
  return playlist
}

export default async function SongList(
    { category, categoryVal }: any
) {
  let playlist = fetchPlaylist();
  useEffect(() => {
    return () => {

    };
  }, []);

  const url = "http://localhost:8000/karaoke/api/v1/songs/?" + category + "=" + categoryVal;
  const songs = await fetch(url)
    .then((response) => {
      const res = response.json();
      return res;
    })

  return(
    <>
    {
      songs.map((s:any) => 
        <SongCard 
          songId={s.id}
          songName={s.name}
          playlistId={playlist}
        />
      )
    }
    </>
  );
};