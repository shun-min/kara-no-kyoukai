import Link from 'next/link';

interface CardProps {
  title: string,
  url: string,
}

export default function Card(
  { title, url }: CardProps,
) {
  // let url = "/song/" + category + "/?" + category + "_" + option;
  return (
    <div className="m-20">
      <Link href={url}>{title}</Link>
    </div>
  )
}
