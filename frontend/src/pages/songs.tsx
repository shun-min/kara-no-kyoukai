"use client"

// import { resolve } from 'path';
// import { List } from 'postcss/lib/list';
// import React, { useState, useEffect } from 'react'
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
// import readFile from '../../helpers';

type Song = {
  name: string,
  artist: string,
}


export const getServerSideProps = (async () => {
    const myhost = "http://127.0.0.1:8000/"
    const response = await fetch(myhost+'karaoke/songs/?expand=""');
    const songs: any = await response.json();
    return { props: { songs }}

}) satisfies GetServerSideProps<{ songs: any }>


export default function Page({
  songs,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
    <h1>List Songs</h1>
    <div>
      {
        songs.map((s: any) => 
          <h3 key={s.id}>
            {s.name} - {s.album}
          </h3>
        )
      }

    </div>
    </>
  );
}
