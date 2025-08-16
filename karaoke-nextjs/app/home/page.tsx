import Link from 'next/link';

export default function MyHome() {
  return (
    <>
    <main>
      <h1>Home page</h1>
      <Link href="/home/artist">Artists</Link>
      <Link href="/home/genre">Genre</Link>
      <Link href="/home/language">Language</Link>
    </main>
    </>
  );
}
