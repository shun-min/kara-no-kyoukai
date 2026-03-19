import SongCard from "./songCard";


interface SongListProps {
  category: string,
  categoryVal: string,
}

export default async function SongList(
    { category, categoryVal }: SongListProps
) {
  const url = process.env.NEXT_PUBLIC_PROD_HOST + "karaoke/api/v1/songs/?" + category + "=" + categoryVal;
  const songs = await fetch(url)
    .then((response) => {
      const res = response.json();
      return res;
    })

  return(
    <>
    {
      songs.map((s: any) => 
        <SongCard 
          key={s.id}
          songId={s.id}
          songName={s.name}
          link={s.youtube_link}
        />
      )
    }
    </>
  );
};