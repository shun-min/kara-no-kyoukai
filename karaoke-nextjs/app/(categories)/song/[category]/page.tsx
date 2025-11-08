import SongList from "@/app/components/songList";

export default async function SongPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params;
  console.log(">>>>", category);
  const categoryInfo = category.split("_")
  const categoryName = categoryInfo[0]
  const categoryVal = categoryInfo[1]

  return (
    <>
      <SongList
        category={categoryName}
        categoryVal={categoryVal}
      />
    </>
  );
};