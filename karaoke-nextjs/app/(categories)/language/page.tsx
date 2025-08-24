import Card from '../../components/card';

export default async function LanguagePage() {
  const host = "http://localhost:8000/karaoke/api/";
  const url = host + "v1/languages/";
  const languages = await fetch(url)
  .then((response) => {
    const res = response.json();
    return res;
  })
  return (
    <>
      <h1>Languages</h1>
      {
        languages.map((l: any) => 
          <Card
            key={l.id}
            title={ l.name }
            url={ "/song"}
          />
        )
      }
    </>
  );
};
