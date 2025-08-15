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
          <div key={g.id}>
            {g.name}
          </div>
        )
      }
    </>
  );
};
  