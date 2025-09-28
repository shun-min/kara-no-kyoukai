import SongCard from "./songCard";


async function getLatestOrderNum() {
  const url = "http://localhost:8000/karaoke/api/v1/playlistitem/?playlist=4";
  const playlist_items = await fetch(url)
    .then((response) => {
      const res = response.json();
      return res;
    })
  console.log("!!!!!")
  console.log(playlist_items.length)
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
  // let order = getLatestOrderNum();
  let order = 2;
  console.log(">>>", order);

  return(
    <>
    {
      songs.map((s:any) => 
        <SongCard 
          songId={s.id}
          songName={s.name}
          playlistOrder={order}
        />
      )
    }
    </>
  );
};