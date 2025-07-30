"use client"
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'

export const getArtists = (async() => {
    const host = "http://localhost:8000/karaoke/api/";
    const url = host + "v1/artists/";
    const response = await fetch(url);
    const artists: any = await response.json();
    return { props: {artists}}
  }) satisfies GetServerSideProps<{artists: any }>


export default function Page({
  artists,
}: InferGetServerSidePropsType<typeof getArtists>) {
  return (
    <>
      <h1>Artist page</h1>
      <div>
        {
          artists.map((a: any) => 
            <div>
              <h3 key={a.id}>
                {a.name}
              </h3>
              <div>
                {
                  a.artist.map((artist: any) => 
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
  