import Link from 'next/link';
import '@app/globals.css'
import { ReactNode } from 'react';


export default function Card(
  { title, url }: any,
) {
  return (
    <>
      <div className="m-auto">
        <Link href={url}>{title}</Link> 
      </div>
    </>
  )
}
