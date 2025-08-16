import Playlist from "../components/playlist";


export default function Layout({ children }: {  children: React.ReactNode }) {
    return (
        <>
        <main>
            {children}
            <Playlist />
        </main>
        </>
    )
}
