"use client"

import { createContext, useContext, ReactNode } from "react";
import { usePlaylist, PlaylistItem } from "../hooks/usePlaylist";

interface PlaylistFeatures {
  playlist: PlaylistItem[];
  addSong: (name: string, path?: string, link?: string) => PlaylistItem;
  removeSong: (id: string) => void;
  clearPlaylist: () => void;
  getPlaylistLength: () => number;
}

const PlaylistContext = createContext<PlaylistFeatures | undefined>(undefined);

export function PlaylistProvider({ children }: { children: ReactNode }) {
  const playlist = usePlaylist();

  return (
    <PlaylistContext.Provider value={playlist}>
      {children}
    </PlaylistContext.Provider>
  );
}

export function usePlaylistContext() {
  const context = useContext(PlaylistContext);
  if (context === undefined) {
    throw new Error("usePlaylistContext must be used within a PlaylistProvider");
  }
  return context;
}

