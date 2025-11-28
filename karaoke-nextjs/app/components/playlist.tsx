"use client"

import PlaylistEntry from "./playlist_entry";

var host = "http://localhost:8000/karaoke/api/";
var playlist_str = "";
var playlist = {};


function fetchPlaylistItems() {
  playlist_str = localStorage.getItem("playlist");
  playlist = JSON.parse(playlist_str);
  return playlist;
}

function createActivePlaylist() {
  let temp = {};
  playlist_str = JSON.stringify(temp);
  localStorage.setItem("playlist", playlist_str);
}

export default function Playlist() {
  createActivePlaylist();
  var entries = fetchPlaylistItems();  

  return (
    <>
      <div 
        className={"flex justify-end m-5"}
      >
        __ My Playlist __
      </div>

      {Object.keys(entries).map((e:any) => 
        <PlaylistEntry
          songName={e["song"]["name"]}
          path={e["song"]["path"]}
          link={e["song"]["youtube_link"]}
          order={e["order"]}
        >
        </PlaylistEntry>
      )}
    </>
  );
};
