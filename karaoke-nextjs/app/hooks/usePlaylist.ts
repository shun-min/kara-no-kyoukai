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

// Internal hook - use usePlaylistContext from context instead
export function usePlaylist() {
  const [playlist, setPlaylist] = useState<PlaylistItem[]>([]);

  // Load playlist from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setPlaylist(Array.isArray(parsed) ? parsed : []);
      } catch (e) {
        console.error("Failed to parse playlist from localStorage:", e);
        setPlaylist([]);
      }
    }
  }, []);

  // Save playlist to localStorage whenever it changes
  useEffect(() => {
    if (playlist.length > 0 || localStorage.getItem(STORAGE_KEY)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(playlist));
    }
  }, [playlist]);

  const addSong = useCallback((name: string, path?: string, link?: string) => {
    const newItem: PlaylistItem = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name,
      path,
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

