import Card from '../../../components/card';


export default async function ArtistsPage() {
  const host = process.env.NEXT_PUBLIC_PROD_HOST + "karaoke/api/";
  const url = host + "v1/artists/";
  const artists = await fetch(url)
  .then((response) => {
    const res = response.json();
    return res;
  })
  return (
    <>
      <div>
      <h1 className="p-4 font-bold text-[25px]">Artists</h1>
      {
        artists.map((a: any) => 
          <Card
            key={a.id}
            title={a.name}
            url={"/song/artist_"+a.id}
          />
        )
      }
      </div>
    </>
  );
};
