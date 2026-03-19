import Card from '../../../components/card';

export default async function GenrePage() {
  const host = process.env.NEXT_PUBLIC_PROD_HOST + "karaoke/api/";
  const url = host + "v1/genres/";
  const genres = await fetch(url)
  .then((response) => {
    const res = response.json();
    return res;
  })
  return (
    <>
      <div>
      <h1 className="p-4 font-bold text-[25px]">Genres</h1>
      {
        genres.map((g: any) => 
          <Card
            key={g.id}
            title={g.name}
            url={"/song/genre_"+ g.id}
          />
        )
      }
      </div>
    </>
  );
};
