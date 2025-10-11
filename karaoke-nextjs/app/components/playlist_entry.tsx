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

export default function PlaylistEntry(
  {songId, songName, entryId, order}: any
) {
  function removeEntry(order: number) {
    console.log("remove ", order);
    const success = removePlaylistItem(entryId=entryId);
  }

  return (
    <>
      <div className="flex gap-x-2 m-2">
        <button key={entryId}>
          {songName}
        </button>
        <button key={entryId} onClick={() => removeEntry(order=order)}>
          -
        </button>
      </div>
    </>
  );
};
