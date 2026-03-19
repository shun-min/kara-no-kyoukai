import Link from 'next/link';

interface CardProps {
  title: string,
  url: string,
}

export default function Card(
  { title, url }: CardProps,
) {
  return (
    <div className="m-2 p-3 inline-block bg-blue-400">
      <Link 
        href={url}>{title}
      </Link>
    </div>
  )
}
