"use client"

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Karaoke app</h1>
      <h2>Search Songs by:</h2>
      <Link href="/artists">Artists</Link>
    </>
  );
}
