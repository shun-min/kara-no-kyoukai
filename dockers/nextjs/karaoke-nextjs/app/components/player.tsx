"use client"


interface MediaProps {
  url: string | undefined,
  // func: Function,
}

export default function MediaPlayer(
  {url}: MediaProps,
) {
  return(
    <>
      {
        url === undefined || url === "" ? (
          <div>No video playing</div>
        ) : (
          <iframe
            id="myPlayer"
            width="840" height="630"
            src={"https://www.youtube.com/embed/" + url }
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            title=''
            // onEnded={func}
          />
        )
      }
    </>
  )
}
