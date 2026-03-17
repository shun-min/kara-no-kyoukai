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
      <div>
        activeSong: {url}
        <div>
          {"https://www.youtube.com/embed/" + url}
        </div>
        <div>
          <iframe
            id="myPlayer"
            width="420" height="315"
            src={"https://www.youtube.com/embed/" + url}
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            title=''
            onEnded={func}
          />
        </div>
      </div>
        )
      }
    </>
  )
}
