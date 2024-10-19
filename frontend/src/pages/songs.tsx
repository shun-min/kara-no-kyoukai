"use client"

import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'

type Artist = {
  name: string,
}

type Song = {
  name: string,
  album: Array<any>,
  artist: Array<Artist>,
}


export const getServerSideProps = (async () => {
    const myhost = "http://127.0.0.1:8000/"
    const response = await fetch(myhost+"karaoke/songs/?expand=artist,album");
    const songs: any = await response.json();
    return { props: { songs }}

}) satisfies GetServerSideProps<{ songs: any }>


export default function Page({
  songs,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
    <h1>Songs</h1>
    <div>
      {
        songs.map((s: any) => 
          <div>
            <h3 key={s.id}>
              {s.name} ({s.language.value})
            </h3>
            <div>
              {
                s.artist.map((artist: any) => 
                  <div>{artist.name}</div>
                )
              }
            </div>
          </div>
        )
      }
    </div>
    </>
  );
}
