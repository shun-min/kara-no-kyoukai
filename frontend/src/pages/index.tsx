"use client"

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Karaoke app</h1>
      <Link href="/songs">Search Songs by:</Link>
      
    </>
  );
}
