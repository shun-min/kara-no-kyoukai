import Card from '../../components/card';

export default function HomePage() {
  return (
    <>
      <main>
        <h1>Karaoke App</h1>
        <div className={"inline-block"}>
          <Card
            title={"Artist"}
            url={"/artist"}
          />
        </div>
        <div className='inline-block'>
          <Card
            title={"Language"}
            url={"/language"}
          />
        </div>
        <div className='inline-block'>
          <Card
            title={"Genre"}
            url={"/genre"}
          />
        </div>
      </main>
    </>
  );
}
