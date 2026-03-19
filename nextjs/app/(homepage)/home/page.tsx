import Card from '../../components/card';


export default function HomePage() {
  
  return (
    <>
      <main>
        <h1
        className="m-8 text-[40px]"
        >
          Karaoke App
        </h1>
        <div className="text-gray-800">
        <div className={"inline-block m-1 bg-yellow-200"}>
          <Card
            title={"Artist"}
            url={"/artist"}
          />
        </div>
        <div className='inline-block m-1 bg-green-200'>
          <Card
            title={"Language"}
            url={"/language"}
          />
        </div>
        <div className='inline-block m-1 bg-cyan-300'>
          <Card
            title={"Genre"}
            url={"/genre"}
          />
        </div>
        </div>
      </main>
    </>
  );
}
