
async function getPlaylistItems() {
  const host = "http://localhost:8000/karaoke/api/";
  const url = host + "v1/playlistitem/?playlist=4";
  const entries = fetch(url)
    .then((response) => {
      const res = response.json();
      return res;
    })
  return entries;
}

export default async function PlaylistEntry() {
  const entries = await getPlaylistItems();
  console.log(entries);
  return (
    <>
    {
      entries.map((e:any) => 
      <div
        // className={"flex justify-end m-10"}
        key={e["id"]}
      >
        <li>
          {e['song']['name']}
        </li>
      </div>
      )
    }
    </>
  );
};
