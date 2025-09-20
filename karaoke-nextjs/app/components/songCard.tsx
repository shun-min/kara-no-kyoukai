import Card from './card';

async function updatePlaylist(
  data: Object
) {
  const url = "http://localhost:8000/karaoke/api/v1/playlistitem/";
  console.log("url=", url)

  const playlist_items = await fetch(url)
    .then((response) => {
      const res = response.json();
      return res;
    })

  const playlist_item = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
    .then((response) => {
      const res = response.json();
      return res;
    })
}

export default async function SongCard(
  { songId, songName, playlistId}: any
) {
  const data = {
    "playlist": playlistId,
    "song": songId,
  }

  return (
    <>
      <h3 key={songId}>
        title={songName}
      </h3>
    </>
  );
};