import Link from 'next/link';

export default function Card(
  { title, options }: any,
) {
  let url = "/song/genre_" + options;
  return (
    <div className="m-20">
      <Link href={url}>{title}</Link>
    </div>
  )
}
