"use client"

import { useState, useEffect, useCallback } from "react";

export interface PlaylistItem {
  id: string;
  name: string;
  path?: string;
  link?: string;
  order: number;
}

const STORAGE_KEY = "karaoke_playlist";
var songIndex = 0;

// Internal hook - use usePlaylistContext from context instead
export function usePlaylist() {
  const [playlist, setPlaylist] = useState<PlaylistItem[]>([]);

  const addSong = useCallback((name: string, path?: string, link?: string) => {
    const newItem: PlaylistItem = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name,
      path,
      link,
      order: playlist.length + 1,
    };
    setPlaylist((prev) => [...prev, newItem]);
    songIndex += 1;
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
    localStorage.removeItem(STORAGE_KEY);
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

