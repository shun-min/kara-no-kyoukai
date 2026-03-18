import Card from '../../../components/card';

export default async function LanguagePage() {
  const host = process.env.NEXT_PUBLIC_PROD_HOST + "karaoke/api/";
  const url = host + "v1/languages/";
  const languages = await fetch(url)
  .then((response) => {
    const res = response.json();
    return res;
  })
  return (
    <>
      <div className="w-full inline-block align-top">
      <h1>Languages</h1>
      {
        languages.map((l: any) => 
          <Card
            key={l.id}
            title={l.name}
            url={"/song/language_"+ l.id}
          />
        )
      }
      </div>
    </>
  );
};
