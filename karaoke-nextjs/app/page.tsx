import Card from './components/card';

export default function Home() {
  return (
    <>
    <main>
      <div className={"inline-block"}>
        <Card
          title={ "Artists" }
          url={ "/artist" }
        />
      </div>
      <div className='inline-block'>
        <Card
          title={"Language"}
          url={ "/language" }
        />
      </div>
      <div className='inline-block'>
        <Card
          title={"Genre"}
          url={ "/genre" }
        />
      </div>
    </main>
    </>
  );
}
