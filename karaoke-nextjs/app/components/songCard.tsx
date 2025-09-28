
function updatePlaylist(
  data: Object
) {
  const url = "http://localhost:8000/karaoke/api/v1/playlistitem/";

  const playlist_item = fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
    .then((response) => {
      const res = response.json();
      return res;
    })

  return playlist_item;
}

export default function SongCard(
  { songId, songName, playlistOrder}: any
) {
  const data = {
    "playlist": 4,
    "song": songId,
    "order": playlistOrder,
  }

  function onAddSong() {
    const result = updatePlaylist(data);
    console.log("Added song" + result);
  };

  return (
    <>
      <div>ABC</div>
      <button key={songId} onClick={onAddSong}>
        {songName}
      </button>
    </>
  );
};