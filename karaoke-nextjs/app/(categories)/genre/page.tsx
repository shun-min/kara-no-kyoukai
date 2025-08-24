import Card from '../../components/card';

export default async function GenrePage() {
  const host = "http://localhost:8000/karaoke/api/";
  const url = host + "v1/genres/";
  const genres = await fetch(url)
  .then((response) => {
    const res = response.json();
    return res;
  })
  return (
    <>
      <h1>Genres</h1>
      {
        genres.map((g: any) => 
          <Card
            key={g.id}
            title={g.name}
            url={"/song" }
          />
        )
      }
    </>
  );
};
