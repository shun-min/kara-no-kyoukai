
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

  return (
    <>
      <div 
        className={"flex justify-end m-10"}
        key={activePlaylist["id"]}
      >
        {activePlaylist['name']}
      </div>
    </>
  );
};
