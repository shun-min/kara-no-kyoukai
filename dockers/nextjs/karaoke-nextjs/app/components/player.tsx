"use client"


interface MediaProps {
  url: string | undefined,
  func: any,
}

export default function MediaPlayer(
  {url, func}: MediaProps,
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
            onEnded={func}
          />
        )
      }
    </>
  )
}
