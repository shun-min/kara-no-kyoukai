import SongList from "@/app/components/songList";

export default async function SongPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params;
  const categoryInfo = category.split("_")
  const categoryName = categoryInfo[0]
  const categoryVal = categoryInfo[1]
  console.log(">>>>", categoryName, categoryVal)

  return (
    <>
      <SongList
        category={categoryName}
        categoryVal={categoryVal}
      />
    </>
  );
};