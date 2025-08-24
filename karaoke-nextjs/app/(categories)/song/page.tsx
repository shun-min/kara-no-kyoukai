import Card from '../../components/card';

export default async function SongList({ category, categoryId }) {
  const host = "http://localhost:8000/karaoke/api/";
  const url = host + "/songs/?" + category + "=" + categoryId;
  const artists = await fetch(url)
    .then((response) => {
      const res = response.json();
      return res;
    })
  return (
    <>
      <h1>Artist page</h1>g
      {
        artists.map((a: any) =>
          <Card
            key={a.id}
            title={a.name}
            url={"/songs/" + a.id}
          />
        )
      }
    </>
  );
};
