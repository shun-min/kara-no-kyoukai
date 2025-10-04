import PlaylistEntry from "./playlist_entry";

var host = "http://localhost:8000/karaoke/api/";
function findActivePlaylist() {
  const url = host + "v1/playlists/?name=MyPlaylist";
  const playlist = fetch(url)
  .then((response) => {
    const res = response.json();
    return res;
  })
  return playlist;
}

function createActivePlaylist() {
  const url = host + "v1/playlists/";
  const playlist = fetch(
    url,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'name': 'MyPlaylist',
      }),
    }
  )
  .then((response) => {
    const res = response.json();
    return res;
  })
  return playlist;
}

function getPlaylistItems() {
  const host = "http://localhost:8000/karaoke/api/";
  const url = host + "v1/playlistitem/?playlist=4";
  const entries = fetch(url)
    .then((response) => {
      const res = response.json();
      return res;
    })
  return entries;
}

export default async function Playlist() {
  var activePlaylist = await findActivePlaylist()
    .then((playlist) => {
      return playlist[0];
    })
  
  if (activePlaylist.length == 0) {
    activePlaylist = await createActivePlaylist()
    .then((playlist) => {
      return playlist;
    })
  }
  
  const entries = await getPlaylistItems();

  return (
    <>
      <div 
        className={"flex justify-end m-5"}
        key={activePlaylist["id"]}
      >
        {activePlaylist['name']}
      </div>

      {entries.map((e:any) => 
        <PlaylistEntry
          songId={e["id"]}
          songName={e["song"]["name"]}
          order={e["order"]}
        />
      )}
    </>
  );
};
