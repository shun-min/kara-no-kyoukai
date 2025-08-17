import Link from 'next/link';


export default function NavBar() {
  return (
    <>
      <div className='m-3'>
        <Link className='m-5' href="/">Home</Link>
        <Link className='m-5' href="/artist">Artists</Link>
        <Link className='m-5' href="/genre">Genre</Link>
        <Link className='m-5'  href="/language">Language</Link>
        {/* <Link href="/search">Search</Link> */}
        </div>
    </>
  )
}