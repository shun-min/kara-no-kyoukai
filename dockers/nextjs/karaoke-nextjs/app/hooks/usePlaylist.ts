"use client"

import { useState, useCallback } from "react";

export interface PlaylistItem {
  id: string;
  name: string;
  link: string;
  order: number;
}


// Internal hook - use usePlaylistContext from context instead
export function usePlaylist() {
  const [playlist, setPlaylist] = useState<PlaylistItem[]>([]);

  const addSong = useCallback((name: string, link: string) => {
    const newItem: PlaylistItem = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name,
      link,
      order: playlist.length + 1,
    };
    setPlaylist((prev) => [...prev, newItem]);
    return newItem;
  }, [playlist.length]);

  const removeSong = useCallback((id: string) => {
    setPlaylist((prev) => {
      const filtered = prev.filter((item) => item.id !== id);
      // Reorder remaining items
      return filtered.map((item, index) => ({
        ...item,
        order: index + 1,
      }));
    });
  }, []);

  const clearPlaylist = useCallback(() => {
    setPlaylist([]);
  }, []);

  const getPlaylistLength = useCallback(() => {
    return playlist.length;
  }, [playlist.length]);

  return {
    playlist,
    addSong,
    removeSong,
    clearPlaylist,
    getPlaylistLength,
  };
}

