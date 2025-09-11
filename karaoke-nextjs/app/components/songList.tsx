"use client"

import { useEffect, useState } from 'react';
import SongCard from "./songCard";

interface PlaylistData
  next_order: integer
  playlist: Object

export default async function SongList(
    { category, categoryVal }: any
) {
  let pl_url = 'http://localhost:8000/karaoke/api/v1/playlists/?name="My Playlist"';
  const [playlist , setPlaylist] = useState({});
  useEffect(() => {
    data
  }, [pl_url, playlist_data]);

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
        />
      )
    }
    </>
  );
};