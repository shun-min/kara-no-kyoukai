"use client"

import { createContext, useContext, ReactNode } from "react";
import { usePlayer } from "../hooks/usePlayer";

interface PlayerFeatures {
  playCurrentSong: () => void;
  playNextSong: () => void;
}

const PlayerContext = createContext<PlayerFeatures | undefined>(undefined);

export function PlaylistProvider({ children }: { children: ReactNode }) {
  const player = usePlayer();

  return (
    <PlayerContext.Provider value={player}>
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayerContext() {
  const context = useContext(PlayerContext);
  if (context === undefined) {
    throw new Error("usePlayerContext must be used within a PlayerProvider")
  }
  return context;
}
