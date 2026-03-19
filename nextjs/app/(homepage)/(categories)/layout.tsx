import NavBar from "@/app/components/navbar";

export default function Layout(
  { children }: { children: React.ReactNode },
) {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}
