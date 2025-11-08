"use client"

function removePlaylistItem(
  entryId: number
) {
  const url = "http://localhost:8000/karaoke/api/v1/playlistitem/" + entryId + "/";

  const success = fetch(url, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'}
  })
    .then((response) => {
      if (typeof(response) != "object") {
        return "Failed";
      }
      const res = response.json();
      return res;
    })

  return success;
}

function storePathInStorage(
  src_path: string,
){
  // localStorage.setItem("currSong", src_path);
  localStorage.setItem("currSong", "https://www.youtube.com/watch?v=pvc2MIM2zpY&list=RDpvc2MIM2zpY&start_radio=1");
  // get 2nd window, play song
}

export default function PlaylistEntry(
  {song, songName, path, link, entryId, order}: any
) {
  function removeEntry(order: number) {
    const success = removePlaylistItem(entryId=entryId);
  }

  let src_path = link ? link : path;
  return (
    <>
      <div className="flex gap-x-2 m-2">
        
        <button key={order} onClick={
          () => storePathInStorage(src_path=src_path)}
        >
          {entryId} {order} {songName}
        </button>
        <button key={entryId} onClick={() => removeEntry(order=order)}>-</button>
      </div>
    </>
  );
};
