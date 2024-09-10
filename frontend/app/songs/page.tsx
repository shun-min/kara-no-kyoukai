import React from 'react'

const SongList = async() => {
  const yaml = require('js-yaml');
  const fs = require('fs');
  const getHost = () => {
    try {
      const config = yaml.load(fs.readFileSync(
        "../config.yaml", "utf8",
      ))
      console.log(config)
      return config.host.dev
    } catch (e) {
      console.log(e);
    }
  };

  const getSongs = async (host: string) => {
    const response = await fetch(host+"karaoke/songs/");
    if (!response.ok) {
      console.error(response.status+ ": " + response.text);
    } else {
      return response.json();
    }
  };

  const host = getHost();
  const songs = await getSongs(host);

  return (
    <>
    <div>List Songs</div>
    <div>
      {
        songs.map((song: any) => {
          <h3 key={song.id}>{song.name}</h3>
        })
      }
    </div>
    </>
  );
}

export default SongList;
