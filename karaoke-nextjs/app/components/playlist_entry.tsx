
function removeEntry(order: number) {
  console.log("remove ", order)
}

export default async function PlaylistEntry(
  {songId, songName, order}: any
) {
  return (
    <>
      <div className="flex gap-x-2 m-2">
        <button
          key={songId}
        >
          {songName}
        </button>
        <button
          key={order}
          onClick={removeEntry(order=order)}
        > - 
        </button>
      </div>
    </>
  );
};
