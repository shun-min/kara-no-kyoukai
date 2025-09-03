import Card from '../../components/card';

export default async function ArtistsPage() {
  const host = "http://localhost:8000/karaoke/api/";
  const url = host + "v1/artists/";
  const artists = await fetch(url)
  .then((response) => {
    const res = response.json();
    return res;
  })
  return (
    <>
      <h1>Artist page</h1>
      {
        artists.map((a: any) => 
          <Card
            key={a.id}
            title={ a.name }
            url={ "/song/artist_" + a.name }
          />
        )
      }
    </>
  );
};
