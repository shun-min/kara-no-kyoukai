import Link from 'next/link';
import Card from './components/card';

export default function Home() {
  return (
    <>
    <main>
      <h1>Karaoke App</h1>
      {/* <Card
        title="Artists"
        children={ <Link href="/artist">Artists</Link> }
      /> */}
      <Link href="/artist">Artists</Link> 
      <Link href="/genre">Genre</Link>
      <Link href="/language">Language</Link>
    </main>
    </>
  );
}
