import Link from 'next/link';

export default function Card(
  { title, url }: any,
) {
  // let url = "/song/" + category + "/?" + category + "_" + option;
  return (
    <div className="m-20">
      <Link href={url}>{title}</Link>
    </div>
  )
}
