import SongCard from "./songCard";

async function getLatestOrderNum() {
  const url = "http://localhost:8000/karaoke/api/v1/playlistitem/?playlist=4";
  const playlist_items = await fetch(url)
    .then((response) => {
      const result = response.json();
      return result
    })
  return playlist_items.length
}

export default async function SongList(
    { category, categoryVal }: any
) {
  const url = "http://localhost:8000/karaoke/api/v1/songs/?" + category + "=" + categoryVal;
  const songs = await fetch(url)
    .then((response) => {
      const res = response.json();
      return res;
    })
  let orderNum = await getLatestOrderNum();

  return(
    <>
    {
      songs.map((s:any) => 
        <SongCard 
          songId={s.id}
          songName={s.name}
          playlist_length={orderNum}
        />
      )
    }
    </>
  );
};