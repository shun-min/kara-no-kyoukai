import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Playlist</h1>
      <h2>Song List</h2>
      {/* <Link href="/playlists"></Link> */}
      <Link href="/songs"></Link>
    </>
  );
}
