export default async function Playlist() {
  const host = "http://localhost:8000/karaoke/api/";
  const url = host + "v1/playlistitem/";
  const p_items = await fetch(url)
  .then((response) => {
    const res = response.json();
    return res;
  })
  return (
    <>
      <h1>Your Playlist</h1>
      {
        p_items.map((a: any) => 
          <div key={a.id}>
            {a.name}
          </div>
        )
      }
    </>
  );
};
