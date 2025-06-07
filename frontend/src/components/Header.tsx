import { Home, User2, ListMusic, Search, Settings, File } from "lucide-react"
import Link from "next/link"

import { NavButton } from "@/components/NavButton"
import { ModeToggle } from "@/components/ModeToggle"

export function Header() {
    return (
      <header className="h-12 p-2 border-b sticky top-0 z-20">
        <div className="flex h-8 items-center justify-between w-full">
            <div className="flex items-center gap-2">
                <NavButton href="/" label="Home" icon={Home} />

                <Link href="/" className="flex justify-center items-center gap-2 ml-0" title="Home">
                    <h1 className="hidden sm:block text-xl font-bold m-0 mt-1">App title here</h1>
                </Link>
            </div>

            <div className="flex items-center ">
                <NavButton href="/artist" label="Artist" icon={User2} />
                <NavButton href="/genre" label="Genre" icon={ListMusic} />
                <NavButton href="/search" label="Search" icon={Search} />
                <NavButton href="/settings" label="Settings" icon={Settings} />
                <ModeToggle />
            </div>

        </div>
      </header>
    )
}
  