"use client"

import { useState, useCallback } from "react";
import { usePlaylistContext } from "../context/PlaylistContext";


export function usePlayer() {
  const { playlist, removeSong } = usePlaylistContext();
  const [activeSong, setActiveSong] = useState<string | undefined>("");

  const setCurrentSong = useCallback((songUrl: string) => {
    setActiveSong(songUrl);
  }, []);

  const fetchNextSong = useCallback(() => {
    setActiveSong(playlist[1].link);
    removeSong(playlist[0].id);
  }, []);

  return {
    activeSong,
    setCurrentSong,
    fetchNextSong,
  };
}
