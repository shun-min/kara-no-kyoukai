import Link from 'next/link';

export default function Home() {
  return (
    <>
    <main>
      <h1>Home page</h1>
      <Link href="/artist">Artists</Link>
      <Link href="/genre">Genre</Link>
      <Link href="/language">Language</Link>
    </main>
    </>
  );
}
