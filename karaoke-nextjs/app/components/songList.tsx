import Card from './card';

export default async function SongList(
    { category, categoryVal }: any
) {
  const url = "http://localhost:8000/karaoke/api/v1/songs/?" + category + "=" + categoryVal;
  console.log("url=", url)
  const songs = await fetch(url)
    .then((response) => {
      const res = response.json();
      return res;
    })

  return(
    <>
    {
      songs.map((s:any) => 
        <Card 
          key={s.id}
          title={s.name}
          url={"/song"}
        />
      )
    }
    </>
  );
};