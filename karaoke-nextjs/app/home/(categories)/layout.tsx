import NavBar from "../../components/navbar";

export default function Layout({ children }: {  children: React.ReactNode }) {
    return (
        <>
        <main>
            <NavBar />
            {children}
        </main>
        </>
    )
}
