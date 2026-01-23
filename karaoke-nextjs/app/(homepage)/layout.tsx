import Playlist from "../components/playlist";

export default function Layout(
  { children }: { children: React.ReactNode },
) {
  return (
    <>
      <main>
        <div className='inline-block justify-end'>
          {children}
        </div>
        <div className='inline-block justify-end'>
          <Playlist />
        </div>
      </main>
    </>
  )
}
