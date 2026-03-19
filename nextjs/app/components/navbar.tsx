import Link from 'next/link';


export default function NavBar() {
  return (
    <>
      <div className='p-5 bg-blue-600'>
        <Link className='m-7' href="/home">Home</Link>
        <Link className='m-7' href="/artist">Artist</Link>
        <Link className='m-7' href="/genre">Genre</Link>
        <Link className='m-7' href="/language">Language</Link>
        {/* <Link href="/search">Search</Link> */}
        </div>
    </>
  )
}