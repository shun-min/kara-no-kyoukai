import Link from 'next/link';

export default function NavBar() {
    return (
        <>
            <Link href="/">Home</Link>
            <Link href="/artist">Artists</Link>
            <Link href="/genre">Genre</Link>
            <Link href="/language">Language</Link>
            {/* <Link href="/search">Search</Link> */}
        </>
    )
}